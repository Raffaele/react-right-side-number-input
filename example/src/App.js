import React from 'react'

import { RightSideNumberInput } from 'react-right-side-number-input'
import 'react-right-side-number-input/dist/index.css'
import { useRef, useState } from 'react';

const App = () => {
  const ref = useRef();
  const [value, setValue] = useState(0);
  const [copiedValue, setCopiedValue] = useState(0);
  function showResult() {
    setCopiedValue(ref.current.value);
  }

  function handleChange(evt) {
    setValue(evt.target.value);
  }

  function focusInput() {
    ref.current.focus();
  }

  return <div>
    <fieldset>
      <legend>With ref</legend>
      <RightSideNumberInput ref={ref} dividerSymbol="," valueSymbol="£" />
      <button onClick={showResult}>update result</button>
      <button onClick={focusInput}>focus</button>
      <div>{copiedValue}</div>
    </fieldset>
    <fieldset>
      <legend>autofocus</legend>
      <RightSideNumberInput valueSymbol="$" autofocus numOfDigits={4} value={value} onChange={handleChange} />
      <div>value: {value}</div>
    </fieldset>
  </div>;
}

export default App
