import { Application } from './application'
import { render, screen } from '@testing-library/react'

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />)

    const pageHeading = screen.getByRole('heading', {
      level: 1
    })
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole('heading', {
      level: 2
    })
    expect(sectionHeading).toBeInTheDocument()

    const nameEl = screen.getByRole('textbox', {
      name: 'Name'
    })
    expect(nameEl).toBeInTheDocument()

    const nameEl2 = screen.getByLabelText('Name')
    expect(nameEl2).toBeInTheDocument()

    const nameEl3 = screen.getByPlaceholderText('Fullname')
    expect(nameEl3).toBeInTheDocument()

    const termEl2 = screen.getByLabelText('I agree to the terms and conditions')
    expect(termEl2).toBeInTheDocument()

    const bioEl = screen.getByRole('textbox', {
      name: 'Bio'
    })
    expect(bioEl).toBeInTheDocument()

    const jobLocationEl = screen.getByRole('combobox')
    expect(jobLocationEl).toBeInTheDocument()

    const termsEl = screen.getByRole('checkbox')
    expect(termsEl).toBeInTheDocument()

    const submitBtn = screen.getByRole('button')
    expect(submitBtn).toBeInTheDocument()
  })
})
