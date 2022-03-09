import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./index.page"

describe("This is a random test", () => {
  it("should pass", () => {
    render(<App />)
    expect(screen.getByText("Hello World")).toBeInTheDocument()
  })
})
