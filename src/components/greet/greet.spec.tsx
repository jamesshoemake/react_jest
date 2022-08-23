// Greet should render text hello
// should render hello (name) if passed a name

import { render, screen } from '@testing-library/react'
import { Greet } from './greet'

// describe used to group tests
// test.skip skips testing
// test.only only runs test for the associated test
// test suite is a file not a describe block

describe('Greet', () => {
  // fit may be used as test.only
  fit('render correctly', () => {
    render(<Greet />)
    const textEl = screen.getByText('Hello')
    expect(textEl).toBeInTheDocument()
  })
  describe('Nested', () => {
    // it may be used in place of test
    it('renders with name', () => {
      render(<Greet name="John" />)
      const textEl = screen.getByText('Hello John')
      expect(textEl).toBeInTheDocument()
    })
  })
})

describe('UnNested-same file', () => {
  // xit excludes a test from being run
  it('renders with name-2', () => {
    render(<Greet name="John" />)
    const textEl = screen.getByText('Hello John')
    expect(textEl).toBeInTheDocument()
  })
})
