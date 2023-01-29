import React from 'react'

const Cross = ({ ...props }) => {
  return (
    <svg
      width="22"
      height="24"
      viewBox="0 0 20 22"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  )
}

export default Cross
