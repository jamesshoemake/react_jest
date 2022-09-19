import { render, screen } from '@testing-library/react'
import { Users } from './users'

describe('Users', () => {
  test('renders correctly', () => {
    render(<Users />)
    const textEl = screen.getByText('Users')
    expect(textEl).toBeInTheDocument()
  })
})
