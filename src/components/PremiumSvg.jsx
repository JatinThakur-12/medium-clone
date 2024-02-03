import React from 'react'

function PremiumSvg({ props, fill, classes}) {
  //In Props it expects width and heigth of star 
  // eg: width="64" height="64"
  return (
    <svg {...props} viewBox="0 0 64 64" fill="none" role="presentation" aria-hidden="true" focusable="false" className={`${classes} align-middle block  `}>
      <path d="M39.64 40.83L33.87 56.7a1.99 1.99 0 0 1-3.74 0l-5.77-15.87a2.02 2.02 0 0 0-1.2-1.2L7.3 33.88a1.99 1.99 0 0 1 0-3.74l15.87-5.77a2.02 2.02 0 0 0 1.2-1.2L30.12 7.3a1.99 1.99 0 0 1 3.74 0l5.77 15.87a2.02 2.02 0 0 0 1.2 1.2l15.86 5.76a1.99 1.99 0 0 1 0 3.74l-15.87 5.77a2.02 2.02 0 0 0-1.2 1.2z" fill={fill || "#FFC017"}></path>
    </svg>
  )
}

export default PremiumSvg