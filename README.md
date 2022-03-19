# react-right-side-number-input

Component to handle number input to insert digit from rightside.

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-right-side-number-input.svg)](https://www.npmjs.com/package/react-right-side-number-input) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install git+https://github.com/Raffaele/react-right-side-number-input
```

or 

```bash
yarn add git+https://github.com/Raffaele/react-right-side-number-input
```

## Example

https://raffaele.github.io/react-right-side-number-input/

## Usage

```jsx
import {useState} from 'react';
import { RightSideNumberInput } from 'react-right-side-number-input';
import 'react-right-side-number-input/dist/index.css';

const handleChange = (evt) => {
  setValue(evt.target.value);
}

const Example = () => {
  const [value, setValue] = useState(0);
  return <RightSideNumberInput
    value={value}
    onChange={handleChange}
    valueSymbol="$"
    autofocus
    numOfDigits={4}
  />;
};
```

## License

MIT © [Raffaele](https://github.com/Raffaele)
