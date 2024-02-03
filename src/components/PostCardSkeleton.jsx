import React from 'react';
import Avatar from "@mui/material/Avatar";
import Skeleton from "@mui/material/Skeleton";


function PostCardSkeleton() {
  return (
    <>
        <div className="flex w-full h-38 justify-between align-middle mb-4">
          <div className="flex-col w-full my-2 mr-4">
            <div className="flex items-center gap-2 text-xs font-semibold">
                <Skeleton
                    animation="wave"
                    variant="circular"
                    width={40}
                    height={40}
                />              
                <Skeleton
                    animation="wave"
                    height={20}
                    width="60%"
                    style={{}}
                />
            </div>
            <div className="py-2 flex flex-col gap-y-1">
              <h2 className="flex font-extrabold leading-5 tracking-tight text-gray-900">
                <Skeleton
                    animation="wave"
                    height={30}
                    width="50%"
                    style={{}}
                />
              </h2>
              <h2 className='sm:hidden'>
                <Skeleton
                    animation="wave"
                    height={20}
                    width="20%"
                    style={{}}
                />
              </h2>
              <div className='hidden sm:block '> 
                <Skeleton
                    animation="wave"
                    height={20}
                    width="90%"
                    style={{}}
                />
                <Skeleton
                    animation="wave"
                    height={20}
                    width="95%"
                    style={{}}
                />
                <Skeleton
                    animation="wave"
                    height={20}
                    width="30%"
                    style={{}}
                />
              </div>
            </div>
            <div className='flex  align-baseline justify-between'>
              <div className="flex items-center text-xs font-normal tracking-tight text-gray-500">
                {/* 
                <div>
                    <Skeleton
                        animation="wave"
                        height={10}
                        width="10%"
                        style={{}}
                    />
                </div>
                <div className="px-1">
                  <span className="relative top-[-0.2rem]">.</span>
                </div>
                <div>22 min read</div>
                <div className="px-1">
                  <span className="relative top-[-0.2rem]">.</span>
                </div>
                <div className='px-2 py-1 rounded-full bg-slate-100'>
                    Japan
                </div> */}

                <Skeleton
                    animation="wave"
                    height={20}
                    width="30px"
                    style={{marginRight: "10px"}}
                />
                <Skeleton
                    animation="wave"
                    height={20}
                    width="30px"
                    style={{paddingRight: "10px"}}
                />
                
              </div>
              <div className="">
                <div className='mr-2'>
                    <Skeleton
                        animation="wave"
                        height={30}
                        width="30px"
                        style={{ }}
                    />
                </div>
              </div>
            </div>
          </div>
        <div className="w-52">
          <div className=" overflow-hidden w-36 h-full sm:w-52">
            <Skeleton sx={{ height: "100%" }} animation="wave" variant="rectangular" />
          </div>
        </div>
        </div>
    </>
  )
}

export default PostCardSkeleton