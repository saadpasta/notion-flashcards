const { compilerOptions } = require("./jsconfig.json")

function makeModuleNameMapper(paths, srcPath) {
  const aliases = {}
  Object.keys(paths).forEach(item => {
    if (item.endsWith("/*")) {
      const key = item.replace("/*", "/(.*)")
      const path = paths[item][0].replace("/*", "/$1")
      aliases[key] = `${srcPath}/${path}`
    } else {
      const key = `${item}/(.*)`
      const path = `${paths[item][0]}/$1`
      aliases[key] = `${srcPath}/${path}`
    }
  })
  return aliases
}

module.exports = {
  transform: {
    "\\.[jt]sx?$": [
      "babel-jest",
      {
        presets: [["@babel/preset-env", { targets: { node: "v16.3.0" } }], ["@babel/preset-react"]],
        plugins: ["styled-jsx/babel"]
      }
    ],
    "\\.(css|less|scss|sass)$": "<rootDir>/src/test-resources/mock-style-test.js"
  },
  moduleNameMapper: makeModuleNameMapper(compilerOptions.paths, "<rootDir>/"),
  modulePathIgnorePatterns: ["<rootDir>/.next", "<rootDir>/src/functional-tests"],
  testPathIgnorePatterns: ["<rootDir>/src/functional-tests/"],
  coveragePathIgnorePatterns: ["<rootDir>/src/functional-tests"],
  collectCoverageFrom: [
    "<rootDir>/src/**",
    "!<rootDir>/src/functional-tests/**",
    "!<rootDir>/src/test-resources/**"
  ],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  testEnvironment: "jsdom"
}
