import React from 'react'
import MailIcon from './MailIcon'
import './App.css'

const App: React.FC = () => {
  return (
    <MailIcon
      mailBackFoldColor="#cf4a43"
      mailTopFoldColor="#cf4a43"
      mailLeftFoldColor="#e15349"
      mailRightFoldColor="#e95f55"
      letterBackgroundColor="white" 
      letterBorderColor="#e15349" 
      letterTextColor="#cb5a5e" 
    />
  )
}

export default App
