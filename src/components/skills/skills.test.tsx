import { render, screen } from "@testing-library/react"
import { Skills } from "./skills"

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"]

  test("Renders correctly", () => {
    render(<Skills skills={skills} />)
    const listEl = screen.getByRole("list")
    expect(listEl).toBeInTheDocument()
  })

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />)
    const listItemEls = screen.getAllByRole("listitem")
    expect(listItemEls).toHaveLength(skills.length)
  })
})
