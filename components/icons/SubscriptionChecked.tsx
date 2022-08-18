import React from 'react'

const SubscriptionChecked = ({
  checked,
  ...props
}: {
  checked: boolean
  props?: any
}) => {
  if (checked) {
    return (
      <svg
        className="bsub-widget__checked-icon bsub-widget__image"
        viewBox="0 0 24 24"
        style={{
          width: '20px',
          height: '20px',
          marginRight: '8px',
          overflow: 'hidden',
        }}
        {...props}
      >
        <path
          fill="currentColor"
          d="M24,12 C24,18.627 18.627,24 12,24 C5.373,24 0,18.627 0,12 C0,5.373 5.373,0 12,0 C18.627,0 24,5.373 24,12 Z M7.0050175,11.4087067 C6.61372743,11.0189496 5.98056367,11.0201924 5.59080666,11.4114825 C5.20104965,11.8027726 5.20229244,12.4359363 5.5935825,12.8256933 L9.9325825,17.1476933 C10.3226506,17.5362331 10.9534086,17.5363886 11.3436681,17.1480412 L19.5076681,9.02404115 C19.8991503,8.63447708 19.9007052,8.00131401 19.5111412,7.60983186 C19.1215771,7.2183497 18.488414,7.21679478 18.0969319,7.60635885 L10.6386478,15.0281006 L7.0050175,11.4087067 Z"
        ></path>
      </svg>
    )
  }

  return (
    <svg
      className="bsub-widget__unchecked-icon bsub-widget__image"
      viewBox="0 0 18 18"
      fill="none"
      style={{
        width: '20px',
        height: '20px',
        marginRight: '8px',
        overflow: 'hidden',
      }}
      {...props}
    >
      <circle cx="9" cy="9" r="9" fill="white" fillOpacity="0.1"></circle>
      <circle cx="9" cy="9" r="8.5" stroke="black" strokeOpacity="0.2"></circle>
    </svg>
  )
}

export default SubscriptionChecked
