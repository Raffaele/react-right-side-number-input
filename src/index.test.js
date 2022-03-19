import React from 'react';
import {RightSideNumberInput} from '.'
import {render} from '@testing-library/react';

describe('RightSideNumberInput component', () => {
  it('is truthy', () => {
    expect(RightSideNumberInput).toBeTruthy()
  })

  describe('input', () => {
    let component;
    let input;
    it('should be defined with type text and numeric input-mode', () => {
      component = render(<RightSideNumberInput />)
      input = component.getByTestId('main-input')
      expect(input).toBeTruthy()
      expect(input.getAttribute('type')).toBe('text')
      expect(input.getAttribute('inputMode')).toBe('numeric')
    })

    it('should match have the passed value', () => {
      component = render(<RightSideNumberInput value={12.05} onChange={() => {}} />)
      input = component.getByTestId('main-input')
      expect(input.value).toBe('12.05')
    })

    it('should approximate the passed int value at the 2nd decimal digit', () => {
      component = render(<RightSideNumberInput value={12} onChange={() => {}} />)
      input = component.getByTestId('main-input')
      expect(input.value).toBe('12.00')
    })

    it('should approximate the passed int value at the 2nd decimal digit', () => {
      component = render(<RightSideNumberInput value={12} onChange={() => {}} />)
      input = component.getByTestId('main-input')
      expect(input.value).toBe('12.00')
    });

    it('should truncate the passed int value at the 4th decimal digit if it is passed as prop', () => {
      component = render(<RightSideNumberInput value={12.123} onChange={() => {}} numOfDigits={4} />)
      input = component.getByTestId('main-input')
      expect(input.value).toBe('12.1230')
    });

    it('should truncate the passed int value at the 4th decimal digit if it is passed as prop', () => {
      component = render(<RightSideNumberInput value={12.1232323} onChange={() => {}} numOfDigits={4} />)
      input = component.getByTestId('main-input')
      expect(input.value).toBe('12.1232')
    });

    it('should have 0.00 as value by default', () => {
      component = render(<RightSideNumberInput />)
      input = component.getByTestId('main-input')
      expect(input.value).toBe('0.00')
    });

    it('should have 0.0000 as value by default if numOfDigit is 4', () => {
      component = render(<RightSideNumberInput numOfDigits={4} />)
      input = component.getByTestId('main-input')
      expect(input.value).toBe('0.0000')
    });

    it('should pass the placeholder', () => {
      component = render(<RightSideNumberInput placeholder="1.2" />)
      input = component.getByTestId('main-input')
      expect(input.getAttribute('placeholder')).toBe('1.2')
    });
  });
})
