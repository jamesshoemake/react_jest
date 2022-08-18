// Greet should render text hello
// should render hello (name) if passed a name

import { render, screen } from '@testing-library/react'
import { Greet } from './greet'

test('Greet render correctly', () => {
  render(<Greet />)
  const textEl = screen.getByText('Hello')
  expect(textEl).toBeInTheDocument()
})

test('Greet renders with name', () => {
  render(<Greet name="John" />)
  const textEl = screen.getByText('Hello John')
  expect(textEl).toBeInTheDocument()
})
