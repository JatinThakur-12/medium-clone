import React from 'react'

function Container({children,props='py-5', maxWidth = "max-w-6xl" }) {
  return (
    <div className='flex justify-center'>
      <div className={`mx-8 sm:mx-16 ${props} ${maxWidth} w-full`}>
        {children}
      </div>
    </div>
  )
}

export default Container