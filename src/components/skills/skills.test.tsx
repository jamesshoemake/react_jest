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

  test("renders login button", () => {
    render(<Skills skills={skills} />)
    const loginBtn = screen.getByRole("button", {
      name: "Login",
    })
    expect(loginBtn).toBeInTheDocument()
  })

  // queryBy and queryAllBy
  // queryBy return null if does not exist
  // queryAllBy return empty array if does not exist
  test("start learning button is not", () => {
    render(<Skills skills={skills} />)
    const startLearningBtn = screen.queryByRole("button", {
      name: "Start Learning",
    })
    expect(startLearningBtn).not.toBeInTheDocument()
  })
})
