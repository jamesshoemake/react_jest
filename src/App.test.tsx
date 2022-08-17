import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

// test(name, fn, timeout)
// name: name of test
// fn -> function contains expectation of the test
// timeout is optional default 5seconds
// test and expect are globally provided by create react app
test('renders learn react link', () => {
  render(<App />) // create virtual dom with element needed for test
  const linkElement = screen.getByText(/learn react/i) // element to assert against
  expect(linkElement).toBeInTheDocument() // matcher function to perform assertion
})
