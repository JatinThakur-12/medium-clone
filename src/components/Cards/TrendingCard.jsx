import React, { useEffect } from 'react'

function TrendingCard({$id,title,userId,index}) {
    useEffect(() => {

    }, [])
    
  return (
    <>
        <div className="max-w-full flex"> 
            <div className='mr-4'>
                <div className="relative top-[-0.3rem] left-0 h-10 w-10">
                <span className='font-semibold text-4xl text-gray-100 mb-2'>
                    {index<10? "0"+index : index}
                </span>
                </div>
            </div>
            <div className="flex-col ">
                <div className="flex gap-2 items-center text-xs font-semibold">
                <img src="https://phantom-marca.unidadeditorial.es/9279e8039b9040209f07a16f0201dd63/resize/828/f/jpg/assets/multimedia/imagenes/2023/01/12/16735402991293.jpg" className="h-6 w-6 rounded-full object-cover" alt="Rdj" />
                <div>Robert Downey Jr.</div>
                </div>
                <div className="py-2">
                <div className="flex font-extrabold tracking-tight leading-5 text-gray-900 after:['.']">{title}</div>
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
    </>
  )
}

export default TrendingCard