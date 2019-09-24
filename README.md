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
import MailIcon from './MailIcon'

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

## API
TODO.

## License
MIT
