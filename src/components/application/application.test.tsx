import { Application } from "./application"
import { render, screen } from "@testing-library/react"

// When to use a query
// resemble how users interact with the code

// - most common queries
// 1. getByRole - top preference for almost everything
// 2. getByLabelText - second best, forms work great with this one.
// 3. getByPlaceholderText - if no label, use placeholder for element that contain them
// 4. getByText - can find non interactive elements
// 5. getByDisplayValue - nav for page with filled values

// - if needed - UX for the below varies by browsers - screen reader etc
// 6. getByAltText
// 7. getByTitle

// - last chance
// 8. getByTestId - user cannot see or hear these, dynamic text areas

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />)

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    })
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    })
    expect(sectionHeading).toBeInTheDocument()

    const closeEl = screen.getByTitle("close")
    expect(closeEl).toBeInTheDocument()

    const nameEl = screen.getByRole("textbox", {
      name: "Name",
    })
    expect(nameEl).toBeInTheDocument()

    const nameEl2 = screen.getByLabelText("Name")
    expect(nameEl2).toBeInTheDocument()

    const nameEl3 = screen.getByPlaceholderText("Fullname")
    expect(nameEl3).toBeInTheDocument()

    const termEl2 = screen.getByLabelText("I agree to the terms and conditions")
    expect(termEl2).toBeInTheDocument()

    const nameEl4 = screen.getByDisplayValue("leChonk")
    expect(nameEl4).toBeInTheDocument()

    const imgEl = screen.getByAltText("a person with a laptop")
    expect(imgEl).toBeInTheDocument()

    const bioEl = screen.getByRole("textbox", {
      name: "Bio",
    })
    expect(bioEl).toBeInTheDocument()

    const paraEl = screen.getByText("All fields are mandatory")
    expect(paraEl).toBeInTheDocument()

    const dataId = screen.getByTestId("custom-element")
    expect(dataId).toBeInTheDocument()

    const jobLocationEl = screen.getByRole("combobox")
    expect(jobLocationEl).toBeInTheDocument()

    const termsEl = screen.getByRole("checkbox")
    expect(termsEl).toBeInTheDocument()

    const submitBtn = screen.getByRole("button")
    expect(submitBtn).toBeInTheDocument()
  })
})
