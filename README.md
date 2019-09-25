<h1 align="center">
	<img alt="React Mail Icon" src="https://user-images.githubusercontent.com/16131737/65396536-0b6e0480-dd5c-11e9-896d-c11d0bc70e84.gif">
</h1>

> 📧 Simple, animated, and customizable mail icon.

## Install
```
$ npm install react-mail-icon
```

## Usage
```jsx
import React, { useState } from 'react'
import { MailIcon } from 'react-mail-icon'

const mailIconStyle = {
  display: 'flex'
} as React.CSSProperties

const App: React.FC = () => {
  const [shouldAnimate, setAnimation] = useState<boolean>(false)
  return (
    <div>
      <MailIcon
        style={mailIconStyle}
        mailBackFoldColor="#2874A6"
        mailTopFoldColor="#2E86C1"
        mailLeftFoldColor="#3498DB"
        mailRightFoldColor="#5DADE2"
        letterBackgroundColor="#FFFFFF"
        letterBorderColor="#1ABC9C"
        letterTextColor="#1ABC9C"
        shouldAnimateOpen={shouldAnimate}
        shouldAnimateDown={shouldAnimate}
        shouldAnimateOnHover
      />
      <button onClick={() => setAnimation(!shouldAnimate)}>Trigger animation</button>
    </div>
  )
}

export default App
```

## Props
#### style

Type: `Object`
Optional: `true`

CSS styling for the component.

#### mailBackFoldColor

Type: `String`
Default: `#2874A6`
Optional: `true`

Color of the mail back fold.

#### mailTopFoldColor

Type: `String`
Default: `#2E86C1`
Optional: `true`

Color of the mail top fold.

#### mailLeftFoldColor

Type: `String`
Default: `#3498DB`
Optional: `true`

Color of the mail left fold.

#### mailRightFoldColor

Type: `String`
Default: `#5DADE2`
Optional: `true`

Color of the mail right fold.

#### letterBackgroundColor

Type: `String`
Default: `#FFFFFF`
Optional: `true`

Color of the letter background.

#### letterBorderColor

Type: `String`
Default: `#1ABC9C`
Optional: `true`

Color of the letter border.

#### letterTextColor

Type: `String`
Default: `#1ABC9C`
Optional: `true`

Color of the letter text.

#### shouldAnimateOpen

Type: `Boolean`
Default: `false`
Optional: `true`

If the mail should animate open and the letter should animate up.

#### shouldAnimateDown

Type: `Boolean`
Default: `false`
Optional: `true`

If the mail should animate down when opened.

#### shouldAnimateOnHover

Type: `Boolean`
Default: `false`
Optional: `true`

If the mail should animate when hovered (`shouldAnimateOpen` takes precendence).

## License
MIT
