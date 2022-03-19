import React, {
  useImperativeHandle,
  forwardRef,
  useRef,
  useState,
  useMemo,
  useEffect,
} from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types'

export const RightSideNumberInput = forwardRef(
  (
    {
      value,
      onChange,
      numOfDigits = 2,
      autofocus = false,
      dividerSymbol = '.',
      valueSymbol = '',
      className = '',
      style = {},
      placeholder = '',
    },
    mainRef
  ) => {
    const inputRef = useRef()
    const [isInitialValueUndefined] = useState(value === undefined)
    const [innerValue, setInnerValue] = useState(getInnerValue(value) || 0)
    const dividerFactor = useMemo(() => {
      return 10 ** numOfDigits
    }, [numOfDigits])

    useImperativeHandle(mainRef, () => ({
      focus: () => {
        inputRef.current.focus()
      },
      value: innerValue,
    }))

    useEffect(() => {
      const isCurrentValueUndefined = value === undefined
      if (isCurrentValueUndefined && !isInitialValueUndefined) {
        throw new Error('')
      }
      if (!isCurrentValueUndefined && isInitialValueUndefined) {
        throw new Error('')
      }
      if (!isCurrentValueUndefined) {
        setInnerValue(value)
      }
    }, [value, isInitialValueUndefined])

    const displayValue = useMemo(() => {
      return (
        valueSymbol +
        innerValue.toFixed(numOfDigits).replace('.', dividerSymbol)
      )
    }, [innerValue])

    const innerClassName = useMemo(() => {
      return [className, styles.input].filter(Boolean).join(' ')
    }, [className])

    function getInnerValue(initialValue, key) {
      if (key === 'Backspace') {
        return Math.trunc((innerValue * dividerFactor) / 10) / dividerFactor
      }
      if (key >= 0 && key <= 9) {
        return (
          (+key + Math.round(dividerFactor * innerValue * 10)) / dividerFactor
        )
      }
      return initialValue
    }

    function handleChange(evt) {
      const newInnerValue = getInnerValue(innerValue, evt.key)
      if (isInitialValueUndefined) {
        setInnerValue(newInnerValue)
        return
      }
      onChange({target: {...mainRef?.current, value: newInnerValue}})
    }

    chechInitialValues()

    function chechInitialValues() {
      const isOnChangeUndefined = onChange === undefined
      if (isOnChangeUndefined ^ isInitialValueUndefined) {
        throw new Error('')
      }
    }

    return (
      <input
        type="text"
        inputMode="numeric"
        className={innerClassName}
        autoFocus={autofocus}
        ref={inputRef}
        onKeyUp={(ect) => handleChange(ect)}
        onChange={() => {}}
        value={displayValue}
        style={style}
        placeholder={placeholder}
        data-testid="main-input"
      />
    )
  }
)

RightSideNumberInput.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  numOfDigits: PropTypes.number,
  autofocus: PropTypes.bool,
  dividerSymbol: PropTypes.string,
  valueSymbol: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string,
}
