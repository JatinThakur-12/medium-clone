import React from 'react'
import dbService from '../appwriteServices/data'
import { Link } from 'react-router-dom'

function PostCard({$id, featuredImage, title}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className="flex w-full h-38 justify-between align-middle">
          <div className="flex-col w-full my-2 mr-4">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <img src="https://phantom-marca.unidadeditorial.es/9279e8039b9040209f07a16f0201dd63/resize/828/f/jpg/assets/multimedia/imagenes/2023/01/12/16735402991293.jpg" className="h-6 w-6 rounded-full object-cover" alt="Rdj"/>
              <div>Robert Downey Jr.</div>
            </div>
            <div className="py-2 flex flex-col gap-y-1">
              <h2 className="flex font-extrabold leading-5 tracking-tight text-gray-900">{title}</h2>
              <div className='hidden sm:block '> Cumque, assumenda. Incidunt illo quia </div>
            </div>
            <div className='flex  align-baseline justify-between'>
              <div className="flex items-center text-xs font-normal tracking-tight text-gray-500">
                <div>Dec 23, 2023</div>
                <div className="px-1">
                  <span className="relative top-[-0.2rem]">.</span>
                </div>
                <div>22 min read</div>
                <div className="px-1">
                  <span className="relative top-[-0.2rem]">.</span>
                </div>
                <div className='px-2 py-1 rounded-full bg-slate-100'>
                    Japan
                </div>
              </div>
              <div className="">
                <div className='mr-2'>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="" className="text-gray-400 hover:text-[#ffc117] " aria-label="Add to list bookmark button"><path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z" fill="currentColor"></path></svg>
                </div>
              </div>
            </div>
          </div>
        <div className=" sm:w-52">
          <div className=" overflow-hidden  w-36 h-full sm:w-52">
            <img  className="w-36 h-28 sm:h-36 sm:w-52 object-cover"src={dbService.getFilePreview(featuredImage)} alt="" />
          </div>
        </div>
        </div>
        {/* <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={dbService.getFilePreview(featuredImage)} alt={title} className='rounded-xl'/>
            </div>
            <h2>{title}</h2>
        </div> */}
    </Link>
  )
}

export default PostCard