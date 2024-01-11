import React from 'react'

function Container({children,props='py-5'}) {
  return (
    <div className='flex justify-center'>
      <div className={`mx-8 sm:mx-16 ${props} max-w-6xl w-full`}>
        {children}
      </div>
    </div>
  )
}

export default Container