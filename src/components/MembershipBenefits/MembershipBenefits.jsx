import React from 'react'

function MembershipBenefits({ heading, content }) {
  return (
    <div className='flex flex-col gap-4'>
      <div className='fss text-3xl md:text-5xl font-medium tracking-tight'>{heading}</div>
      <div className='text-base leading-normal sm:text-xl'>
        {content}
      </div>
    </div>
  )
}

export default MembershipBenefits