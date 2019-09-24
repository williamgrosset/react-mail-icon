import React from 'react'
import './MailIcon.css'

interface Props {
  style?: object
  mailBackFoldColor?: string
  mailTopFoldColor?: string
  mailLeftFoldColor?: string
  mailRightFoldColor?: string
  letterBackgroundColor?: string
  letterBorderColor?: string
  letterTextColor?: string
  shouldAnimateOpen?: boolean
  shouldAnimateDown?: boolean
  shouldAnimateOnHover?: boolean
  animateDownLength?: number
}

const MailIcon: React.FC<Props> = ({
  style,
  mailBackFoldColor,
  mailTopFoldColor,
  mailLeftFoldColor,
  mailRightFoldColor,
  letterBackgroundColor,
  letterBorderColor,
  letterTextColor,
  shouldAnimateOpen,
  shouldAnimateDown,
  shouldAnimateOnHover,
  animateDownLength
}) => {
  return (
    <div style={style}>
      <div className={`letter-image ${shouldAnimateOnHover ? 'shouldAnimateOnHover' : ''}`}>
        <div className={`animated-mail ${shouldAnimateDown ? 'shouldAnimateMailDown' : ''}`}>
          <div className="back-fold" style={{ background: mailBackFoldColor }}></div>
          <div className={`letter ${shouldAnimateOpen ? 'shouldAnimateLetter' : ''}`} style={{ background: letterBackgroundColor, borderColor: letterBorderColor }}>
            <div className="letter-title" style={{ background: letterTextColor }}></div>
            <div className="letter-subject" style={{ background: letterTextColor }}></div>
            <div className="letter-context" style={{ background: letterTextColor }}></div>
          </div>
          <div className={`top-fold ${shouldAnimateOpen ? 'shouldAnimateTopFold' : ''}`} style={{ borderColor: `${mailTopFoldColor} transparent transparent transparent` }}></div>
          <div className="left-fold" style={{ borderColor: `transparent transparent transparent ${mailLeftFoldColor}` }}></div>
          <div className="right-fold" style={{ borderColor: `transparent transparent ${mailRightFoldColor} transparent` }}></div>
        </div>
      </div>
    </div>
  )
}

export default MailIcon
