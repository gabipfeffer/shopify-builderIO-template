import React from 'react'

const SubscriptionIcon = ({ ...props }) => {
  return (
    <svg
      className="bsub-widget__image"
      viewBox="0 0 72 72"
      fill="currentColor"
      style={{
        display: 'block',
        width: '2.5em',
        height: '2.5em',
      }}
      {...props}
    >
      <g opacity="0.8">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11 16C10.4477 16 10 16.4477 10 17V32.01H8V17C8 15.3431 9.34315 14 11 14H40C41.6569 14 43 15.3431 43 17V49H40.95V47H41V17C41 16.4477 40.5523 16 40 16H11Z"
          fill="currentColor"
        ></path>
        <path
          d="M51 54C54.3137 54 57 51.3137 57 48C57 44.6863 54.3137 42 51 42C47.6863 42 45 44.6863 45 48C45 51.3137 47.6863 54 51 54Z"
          fill="currentColor"
          fillOpacity="0.2"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M51 43C48.2386 43 46 45.2386 46 48C46 50.7614 48.2386 53 51 53C53.7614 53 56 50.7614 56 48C56 45.2386 53.7614 43 51 43ZM44 48C44 44.134 47.134 41 51 41C54.866 41 58 44.134 58 48C58 51.866 54.866 55 51 55C47.134 55 44 51.866 44 48Z"
          fill="currentColor"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M53.5858 22H42V20H54.4142L67 32.5858V49H57V47H65V33.4142L53.5858 22Z"
          fill="currentColor"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50.5 28.7929L55.2071 33.5H50.5V28.7929ZM51.5 31.2071V32.5H52.7929L51.5 31.2071Z"
          fill="currentColor"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M42 47H45V49H42V47Z"
          fill="currentColor"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 24.94C14.6112 24.94 7 32.5512 7 41.94C7 51.3288 14.6112 58.94 24 58.94C33.3888 58.94 41 51.3288 41 41.94C41 32.5512 33.3888 24.94 24 24.94ZM5 41.94C5 31.4466 13.5066 22.94 24 22.94C34.4934 22.94 43 31.4466 43 41.94C43 52.4334 34.4934 60.94 24 60.94C13.5066 60.94 5 52.4334 5 41.94Z"
          fill="currentColor"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.5 32.94H24.5V41.7329L30.3536 47.5864L29.6464 48.2936L23.5 42.1471V32.94Z"
          fill="currentColor"
        ></path>
      </g>
    </svg>
  )
}

export default SubscriptionIcon
