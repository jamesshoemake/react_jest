import { render, screen } from '../../test-utils'
import { MuiMode } from './MuiMode'

describe('MuiMode', () => {
  // example of test with wrapper
  // test('renders text correctly', () => {
  //   render(<MuiMode />, {
  //     wrapper: AppProviders
  //   })
  //   const headingElement = screen.getByRole('heading')
  //   expect(headingElement).toHaveTextContent('dark mode')
  // })

  test('renders text correctly', () => {
    render(<MuiMode />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('dark mode')
  })

  test('renders text in white color for dark mode', () => {
    render(<MuiMode />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveStyle({ color: "'rgb(255, 255, 255)'" })
  })
})
