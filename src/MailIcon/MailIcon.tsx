import React from 'react'
import './styles.css'

interface Props {
  /* CSS styling for the component */
  style?: object

  /* Color of the mail back fold */
  mailBackFoldColor?: string

  /* Color of the mail top fold */
  mailTopFoldColor?: string

  /* Color of the mail left fold */
  mailLeftFoldColor?: string

  /* Color of the mail right fold */
  mailRightFoldColor?: string

  /* Color of the letter background */
  letterBackgroundColor?: string

  /* Color of the letter border */
  letterBorderColor?: string

  /* Color of the letter text */
  letterTextColor?: string

  /* If the mail should animate open and the letter should animate up */
  shouldAnimateOpen?: boolean

  /* If the mail should animate down when opened */
  shouldAnimateDown?: boolean

  /* If the mail should animate when hovered (shouldAnimateOpen takes precendence) */
  shouldAnimateOnHover?: boolean
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
  shouldAnimateOnHover
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

MailIcon.defaultProps = {
  mailBackFoldColor: "#2874A6",
  mailTopFoldColor: "#2E86C1",
  mailLeftFoldColor: "#3498DB",
  mailRightFoldColor: "#5DADE2",
  letterBackgroundColor: "#FFFFFF",
  letterBorderColor: "#1ABC9C",
  letterTextColor: "#1ABC9C",
  shouldAnimateOpen: false,
  shouldAnimateDown: false,
  shouldAnimateOnHover: false,
} as Partial<Props>

export default MailIcon
