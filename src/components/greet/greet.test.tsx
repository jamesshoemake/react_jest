// Greet should render text hello
// should render hello (name) if passed a name
// file could also be named greet.spec.tsx
// also might use __tests__ folder to store tests

import { render, screen } from '@testing-library/react'
import { Greet } from './greet'

// describe used to group tests
// test.skip skips testing
// test.only only runs test for the associated test
// test suite is a file not a describe block
describe('Greet', () => {
  test('render correctly', () => {
    render(<Greet />)
    const textEl = screen.getByText(/Hello/)
    expect(textEl).toBeInTheDocument()
  })
  // describe('Nested', () => {
  //   test('renders with name', () => {
  //     render(<Greet name="John" />)
  //     const textEl = screen.getByText('Hello John')
  //     expect(textEl).toBeInTheDocument()
  //   })
  // })
})

// describe('UnNested-same file', () => {
//   test('renders with name-2', () => {
//     render(<Greet name="John" />)
//     const textEl = screen.getByText('Hello John')
//     expect(textEl).toBeInTheDocument()
//   })
// })
