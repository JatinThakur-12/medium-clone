import React from 'react'

function UserTestimonial({name, profession, imageSrc, testimonial }) {
    return (
        <div className='flex flex-col md:flex-row gap-7'>
            <div className="w-2/12">
                <div className='w-20 h-20 overflow-hidden'>
                    <img src={imageSrc} className='object-cover w-20 h-20 rounded-full ' alt="" />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className=" text-base sm:text-lg md:text-xl text-[#242424]">{testimonial}</div>
                <div className="text-sm sm:text-base text-black font-medium"><span className='font-semibold'>{name}</span>, {profession}</div>
            </div>
        </div>
    )
}

export default UserTestimonial