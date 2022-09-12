import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { Counter } from './counter'

describe('Counter', () => {
  test('renders correctly', () => {
    render(<Counter />)
    const countEl = screen.getByRole('heading')
    expect(countEl).toBeInTheDocument()

    const incrementBtn = screen.getByRole('button', {
      name: 'Increment'
    })
    expect(incrementBtn).toBeInTheDocument()
  })

  test('render a count of 0', () => {
    render(<Counter />)
    const countEl = screen.getByRole('heading')
    expect(countEl).toHaveTextContent('0')
  })

  test('renders a count of 1 after clicking increment btn', async () => {
    render(<Counter />)
    const incrementBtn = screen.getByRole('button', {
      name: 'Increment'
    })
    await user.click(incrementBtn)
    const counterEl = screen.getByRole('heading')
    expect(counterEl).toHaveTextContent('1')
  })

  test('render a count of 2 after clicking the increment btn', async () => {
    render(<Counter />)
    const incrementBtn = screen.getByRole('button', {
      name: 'Increment'
    })
    await user.dblClick(incrementBtn)
    const counterEl = screen.getByRole('heading')
    expect(counterEl).toHaveTextContent('2')
  })
})
