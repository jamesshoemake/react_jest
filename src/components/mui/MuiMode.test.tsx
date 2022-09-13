import { render, screen } from '@testing-library/react'
import { AppProviders } from '../../providers/app-providers'
import { MuiMode } from './MuiMode'

describe('MuiMode', () => {
  test('renders text correctly', () => {
    render(<MuiMode />, {
      wrapper: AppProviders
    })
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('dark mode')
  })

  test('renders text in white color for dark mode', () => {
    render(<MuiMode />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveStyle({ color: "'rgb(255, 255, 255)'" })
  })
})
