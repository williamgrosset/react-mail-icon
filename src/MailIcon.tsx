import React from 'react'
import './MailIcon.css'

interface Props {
  style?: object
  size?: string
  mailBackFoldColor?: string
  mailTopFoldColor?: string
  mailLeftFoldColor?: string
  mailRightFoldColor?: string
  letterBackgroundColor?: string
  letterBorderColor?: string
  letterTextColor?: string
  shouldAnimate?: boolean
  shouldAnimateOnHover?: boolean
  shouldAnimateDown?: boolean
  animateDownLength?: number
}

const MailIcon: React.FC<Props> = ({
  style,
  size,
  mailBackFoldColor,
  mailTopFoldColor,
  mailLeftFoldColor,
  mailRightFoldColor,
  letterBackgroundColor,
  letterBorderColor,
  letterTextColor,
  shouldAnimate,
  shouldAnimateOnHover,
  shouldAnimateDown,
  animateDownLength
}) => {
  return (
    <div className="letter-image" style={style}>
      <div className="animated-mail">
        <div className="back-fold" style={{ background: mailBackFoldColor }}></div>
        <div className="letter" style={{ background: letterBackgroundColor, borderColor: letterBorderColor }}>
          <div className="letter-title" style={{ background: letterTextColor }}></div>
          <div className="letter-subject" style={{ background: letterTextColor }}></div>
          <div className="letter-context" style={{ background: letterTextColor }}></div>
        </div>
        <div className="top-fold" style={{ borderColor: `${mailTopFoldColor} transparent transparent transparent` }}></div>
        <div className="left-fold" style={{ borderColor: `transparent transparent transparent ${mailLeftFoldColor}` }}></div>
        <div className="right-fold" style={{ borderColor: `transparent transparent ${mailRightFoldColor} transparent` }}></div>
      </div>
    </div>
  )
}

export default MailIcon
