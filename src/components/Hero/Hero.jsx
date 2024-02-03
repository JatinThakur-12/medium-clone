import React from 'react'
import MmAnimation from './Svg'
import { Link } from 'react-router-dom'
import {Container} from '../'
import './hero.css'

function Hero() {
  return (
    <>
    <div className="hidden md:block">
        <div className='svg w-[560px] text-black right-0 absolute'>
            {/* <MmAnimation /> */}
        </div>
    </div>
    <Container props={'py-0'}>
        {/* className='flex justify-center'>
            <div className='w-full max-w-6xl mx-8 md:mx-16'> */}
            <div className='flex flex-col py-24 max-w-[550px]'>
                <div className='text-[80px] xs:text-[85px] md:text-[102px] mb-[36px]'>
                    <h1 className='tracking-tight font-bold fss leading-[1] xs:leading-[0.80]'>
                        Stay curious.
                    </h1>
                </div>
                <div className='mb-9 w-4/5'>
                    <h3 className='text-xl  font-medium'>
                        Discover stories, thinking, and expertise from writers on any topic.
                    </h3>
                </div>
                <div className='font-normal'>
                    <Link to="/signup">
                        <button className='block text-lg font-medium py-2 px-10 text-white bg-[#191919] hover:bg-black duration-100 rounded-full'>
                            Start reading
                        </button>
                    </Link>
                </div>
            </div>
    </Container>
    
    
    </>
  )
}

export default Hero