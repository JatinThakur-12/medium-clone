import React from 'react'

function MembershipSection({ sectionHeading, children }) {
    return (
        <section className='flex flex-col lg:flex-row py-20 px-8 gap-12 border-b border-black'>
            <div className='font-medium lg:min-w-[480px] lg:max-w-[480px] tracking-tight'>
                <h2 className='fss text-5xl sm:text-7xl sticky top-40'>{sectionHeading}</h2>
            </div>
            <div className='flex flex-col lg:max-w-2xl gap-20 lg:gap-32'>
                {children}
            </div>
        </section>
    )
}

export default MembershipSection