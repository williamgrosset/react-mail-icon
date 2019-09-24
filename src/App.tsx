import React, { useState } from 'react'
import MailIcon from './MailIcon'
import './App.css'

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  height: '100%'
} as React.CSSProperties

const mailIconStyle = {
  display: 'flex',
} as React.CSSProperties

const btnStyle = {
  display: 'flex',
  marginTop: '100px'
} as React.CSSProperties

const App: React.FC = () => {
  const [shouldAnimate, setAnimation] = useState<boolean>(false)
  return (
    <div style={divStyle}>
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
      <button style={btnStyle} onClick={() => setAnimation(!shouldAnimate)}>Trigger animation</button>
    </div>
  )
}

export default App
