import React from "react"
import { URL_INPUT_PLACEHOLDER } from "@src/helpers/constant"

const App = () => (
  <div className="text-3xl font-bold underline">
    <input data-testid="input-testid" placeholder={URL_INPUT_PLACEHOLDER} />
    <button data-testid="button-testid" type="button">Submit</button>
  </div>
)

export default App
