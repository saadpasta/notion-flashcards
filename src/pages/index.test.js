import React from "react"
import { render, screen } from "@testing-library/react"
import { URL_INPUT_PLACEHOLDER } from "@src/helpers/constant"
import App from "./index.page"

describe("Index Page", () => {
  describe("Render Page", () => {
    it("should render the input and button", () => {
      render(<App />)
      const input = screen.getByTestId("input-testid")
      expect(input).toBeInTheDocument()
      expect(input.placeholder).toBe(URL_INPUT_PLACEHOLDER)
    })
    it("should render the button ", () => {
      render(<App />)
      expect(screen.getByText("Submit")).toBeInTheDocument()
    })
  })

  describe("when you enter url and click submit", () => {

  })
})
