import { render, screen } from '@testing-library/react'
import { CounterTwo } from './counter-two'
import user from '@testing-library/user-event'

describe('CounterTwo', () => {
  test('renders correctly', () => {
    render(<CounterTwo count={0} />)
    const textEl = screen.getByText('Counter Two')
    expect(textEl).toBeInTheDocument()
  })

  test('handlers are called', async () => {
    const incrementHandler = jest.fn()
    const decrementHandler = jest.fn()
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    )
    const incrementBtn = screen.getByRole('button', { name: 'Increment' })
    const decrementBtn = screen.getByRole('button', { name: 'Decrement' })

    await user.click(incrementBtn)
    await user.click(decrementBtn)

    expect(incrementHandler).toHaveBeenCalledTimes(1)
    expect(decrementHandler).toHaveBeenCalledTimes(1)
  })
})
