import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import CostInput from './CostInput'

afterEach(cleanup)
it('handleChange function called', () => {
  const spy = jest.fn()
  const { getByLabelText } = render(<CostInput handleChange={spy} />)
  const input = getByLabelText('Item Cost')
  expect(input.value).toBe('')
  fireEvent.change(input, { target: { value: '23' } })
  expect(spy).toHaveBeenCalledTimes(1)
})
