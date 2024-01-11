import React, { useEffect } from 'react'
import TrendSvg from './TrendSvg'
import TrendingCard from '../Cards/TrendingCard'
import Container from '../container/Container'

function Trending({posts}) {
    useEffect(() => {
      
    }, [])
    
  return (
    <>
      <Container props={'py-8'}>
      <div className='flex gap-2 pt-1 mb-4'>
              <div className='mx-1 '>
                <TrendSvg className="" props="w-6"/>
              </div>
              <div className='items-center'>
                <span className='tracking-tight font-semibold text-base '>
                  Trending On Medium
                </span>
              </div>
            </div>

            <div className='flex flex-wrap gap-y-6 md:gap-y-4 items-start'>

              {posts.map((post,index)=>(
                <div key={post.$id} className="basis-full md:basis-1/2 lg:basis-1/3 px-4 pt-0  sm:max-w-full">
                  <TrendingCard {...post} index={index} />
                </div>
              ))}

              <div className="basis-full md:basis-1/2 lg:basis-1/3 px-4 pt-0  sm:max-w-full">
                <div className="max-w-full flex"> 
                    <div className='mr-4'>
                      <div className="relative top-[-0.3rem] left-0 h-10 w-10">
                        <span className='font-semibold text-4xl text-gray-200 mb-2'>
                          01
                        </span>
                      </div>
                    </div>
                    <div className="flex-col ">
                      <div className="flex gap-2 items-center text-xs font-semibold">
                        <img src="https://phantom-marca.unidadeditorial.es/9279e8039b9040209f07a16f0201dd63/resize/828/f/jpg/assets/multimedia/imagenes/2023/01/12/16735402991293.jpg" className="h-6 w-6 rounded-full object-cover" alt="Rdj" />
                        <div>Robert Downey Jr.</div>
                      </div>
                      <div className="py-2">
                        <div className="flex font-extrabold tracking-tight leading-5 text-gray-900 after:['.']">Want to Tailwind?kbsdjb </div>
                      </div>
                      <div className="flex items-center text-xs font-normal tracking-tight text-gray-500">
                        <div>Dec 23, 2023</div>
                        <div className="px-1">
                          <span className="relative top-[-0.2rem] ">.</span>
                        </div>
                        <div>abcd</div>
                        <div className=" px-1">
                          <span className="relative top-[-0.2rem] ">.</span>
                        </div>
                        <div>abcd</div>
                      </div>
                    </div>
                </div>
              </div>

              <div className="basis-full md:basis-1/2 lg:basis-1/3 px-4 pt-0  sm:max-w-full">
                <div className="max-w-full flex">
                    <div className='mr-4'>
                      <div className="relative top-[-0.3rem] left-0 h-10 w-10">
                        <span className='font-semibold text-4xl text-gray-200 mb-2'>
                          02
                        </span>
                      </div>
                    </div>
                    <div className="flex-col ">
                      <div className="flex gap-2 items-center text-xs font-semibold">
                        <img src="https://phantom-marca.unidadeditorial.es/9279e8039b9040209f07a16f0201dd63/resize/828/f/jpg/assets/multimedia/imagenes/2023/01/12/16735402991293.jpg" className="h-6 w-6 rounded-full object-cover" alt="Rdj" />
                        <div>Robert Downey Jr.</div>
                      </div>
                      <div className="py-2">
                        <div className="flex font-extrabold tracking-tight leading-5 text-gray-900">Want to dig deeper into Tailwind?kbsdjb </div>
                      </div>
                      <div className="flex items-center text-xs font-normal tracking-tight text-gray-500">
                        <div>Dec 23, 2023</div>
                        <div className="px-1">
                          <span className="relative top-[-0.2rem] ">.</span>
                        </div>
                        <div>abcd</div>
                        <div className=" px-1">
                          <span className="relative top-[-0.2rem] ">.</span>
                        </div>
                        <div>abcd</div>
                      </div>
                    </div>
                </div>
              </div>

              <div className="basis-full md:basis-1/2 lg:basis-1/3 px-4 pt-0  sm:max-w-full">
                <div className="max-w-full flex">
                    <div className='mr-4'>
                      <div className="relative top-[-0.3rem] left-0 h-10 w-10">
                        <span className='font-semibold text-4xl text-gray-200 mb-2'>
                          03
                        </span>
                      </div>
                    </div>
                    <div className="flex-col ">
                      <div className="flex gap-2 items-center text-xs font-semibold">
                        <img src="https://phantom-marca.unidadeditorial.es/9279e8039b9040209f07a16f0201dd63/resize/828/f/jpg/assets/multimedia/imagenes/2023/01/12/16735402991293.jpg" className="h-6 w-6 rounded-full object-cover" alt="Rdj" />
                        <div>Robert Downey Jr.</div>
                      </div>
                      <div className="py-2">
                        <div className="flex font-extrabold tracking-tight leading-5 text-gray-900">Want to dig deeper into Tailwind? </div>
                      </div>
                      <div className="flex items-center text-xs font-normal tracking-tight text-gray-500">
                        <div>Dec 23, 2023</div>
                        <div className="px-1">
                          <span className="relative top-[-0.2rem] ">.</span>
                        </div>
                        <div>abcd</div>
                        <div className=" px-1">
                          <span className="relative top-[-0.2rem] ">.</span>
                        </div>
                        <div>abcd</div>
                      </div>
                    </div>
                </div>
              </div>

              <div className="basis-full md:basis-1/2 lg:basis-1/3 px-4 pt-0  sm:max-w-full">
                <div className="max-w-full flex">
                    <div className='mr-4'>
                      <div className="relative top-[-0.3rem] left-0 h-10 w-10">
                        <span className='font-semibold text-4xl text-gray-200 mb-2'>
                          04
                        </span>
                      </div>
                    </div>
                    <div className="flex-col ">
                      <div className="flex gap-2 items-center text-xs font-semibold">
                        <img src="https://phantom-marca.unidadeditorial.es/9279e8039b9040209f07a16f0201dd63/resize/828/f/jpg/assets/multimedia/imagenes/2023/01/12/16735402991293.jpg" className="h-6 w-6 rounded-full object-cover" alt="Rdj" />
                        <div>Robert Downey Jr.</div>
                      </div>
                      <div className="py-2">
                        <div className="flex font-extrabold tracking-tight leading-5 text-gray-900">Want to dig deeper into Tailwind?kbsdjb </div>
                      </div>
                      <div className="flex items-center text-xs font-normal tracking-tight text-gray-500">
                        <div>Dec 23, 2023</div>
                        <div className="px-1">
                          <span className="relative top-[-0.2rem] ">.</span>
                        </div>
                        <div>abcd</div>
                        <div className=" px-1">
                          <span className="relative top-[-0.2rem] ">.</span>
                        </div>
                        <div>abcd</div>
                      </div>
                    </div>
                </div>
              </div>

              <div className="basis-full md:basis-1/2 lg:basis-1/3 px-4 pt-0  sm:max-w-full">
                <div className="max-w-full flex">
                    <div className='mr-4'>
                      <div className="relative top-[-0.3rem] left-0 h-10 w-10">
                        <span className='font-semibold text-4xl text-gray-200 mb-2'>
                          05
                        </span>
                      </div>
                    </div>
                    <div className="flex-col ">
                      <div className="flex gap-2 items-center text-xs font-semibold">
                        <img src="https://phantom-marca.unidadeditorial.es/9279e8039b9040209f07a16f0201dd63/resize/828/f/jpg/assets/multimedia/imagenes/2023/01/12/16735402991293.jpg" className="h-6 w-6 rounded-full object-cover" alt="Rdj" />
                        <div>Robert Downey Jr.</div>
                      </div>
                      <div className="py-2">
                        <div className="flex font-extrabold tracking-tight leading-5 text-gray-900">Want to dig deeper into Tailwind?kbsdjb </div>
                      </div>
                      <div className="flex items-center text-xs font-normal tracking-tight text-gray-500">
                        <div>Dec 23, 2023</div>
                        <div className="px-1">
                          <span className="relative top-[-0.2rem] ">.</span>
                        </div>
                        <div>abcd</div>
                        <div className=" px-1">
                          <span className="relative top-[-0.2rem] ">.</span>
                        </div>
                        <div>abcd</div>
                      </div>
                    </div>
                </div>
              </div>

              <div className="basis-full md:basis-1/2 lg:basis-1/3 px-4 pt-0  sm:max-w-full">
                <div className="max-w-full flex">
                    <div className='mr-4'>
                      <div className="relative top-[-0.3rem] left-0 h-10 w-10">
                        <span className='font-semibold text-4xl text-gray-200 mb-2'>
                          06
                        </span>
                      </div>
                    </div>
                    <div className="flex-col ">
                      <div className="flex gap-2 items-center text-xs font-semibold">
                        <img src="https://phantom-marca.unidadeditorial.es/9279e8039b9040209f07a16f0201dd63/resize/828/f/jpg/assets/multimedia/imagenes/2023/01/12/16735402991293.jpg" className="h-6 w-6 rounded-full object-cover" alt="Rdj" />
                        <div>Robert Downey Jr.</div>
                      </div>
                      <div className="py-2">
                        <div className="flex font-extrabold tracking-tight leading-5 text-gray-900">Want to dig deeper into Tailwind?kbsdjb </div>
                      </div>
                      <div className="flex items-center text-xs font-normal tracking-tight text-gray-500">
                        <div>Dec 23, 2023</div>
                        <div className="px-1">
                          <span className="relative top-[-0.2rem] ">.</span>
                        </div>
                        <div>abcd</div>
                        <div className=" px-1">
                          <span className="relative top-[-0.2rem] ">.</span>
                        </div>
                        <div>abcd</div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
      </Container>
    </>
  )
}

export default Trending