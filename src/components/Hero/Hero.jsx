import React from 'react'
import MmAnimation from './Svg'
import { Link } from 'react-router-dom'
import './hero.css'

function Hero() {
  return (
    <>
    <div className='overflow-hidden'>
        <div className='px-14'>
            <div className='flex flex-col py-24 mx-16 w-[550px]'>
                <div className='text-[102px] mb-[36px] '>
                    <h1 className='tracking-tight font-bold fss leading-[0.80]'>
                        Stay curious.
                    </h1>
                </div>
                <div className='mb-9 w-4/5'>
                    <h3 className='text-xl  font-semibold'>
                        Discover stories, thinking, and expertise from writers on any topic.
                    </h3>
                </div>
                <div className='font-normal'>
                    <Link to="/signup">
                        <button className='text-lg font-medium py-2 px-10 text-white bg-[#191919] hover:bg-black duration-100 rounded-full'>
                            Start reading
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    <div className='svg w-[560px] text-black'>
        <MmAnimation />
    </div>
    </>
  )
}

export default Hero