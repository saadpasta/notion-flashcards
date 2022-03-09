const path = require("path")
const { compilerOptions } = require("./jsconfig.json")

function getWebpackAliasFromJsconfig(paths) {
  return Object.keys(paths)
    .reduce((currentAlias, pathKey) => {
      const [aliasKey] = pathKey.split("/")
      const [pathAtJsConfig] = paths[pathKey]

      const [relativePathToDir] = pathAtJsConfig.split("/*")
      const absolutePath = path.resolve(__dirname, relativePathToDir)

      return {
        ...currentAlias,
        [aliasKey]: absolutePath
      }
    }, {})
}

module.exports = {
  webpack: config => {
    Object.assign(
      config.resolve.alias,
      getWebpackAliasFromJsconfig(compilerOptions.paths)
    )
    return config
  },
  pageExtensions: ["page.js", "api.js"]
}
