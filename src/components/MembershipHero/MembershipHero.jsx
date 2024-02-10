import React from 'react'
import { useNavigate } from 'react-router'

function MembershipHero({ data }) {
    
    // See Sample data -->
    {
        // Sample Data
        // data = {
        //     bgImageSrc: "/planet.jpeg",
        //     content: "Ai the future of work: What stays 100% human",
        //     userAvatarSrc: "",
        //     userName: "Kurtis Pikes",
        //     userDesignation: "Author of ",
        //     userDesignationDetail: "make talent in yourself",
        //     rgb: "252,132,50",
        // }
    }

    const navigate = useNavigate();

    return (
        <div className="w-full relative flex flex-col sm:flex-row border-b border-black">
          <div className='md:h-[650px] md:w-4/6 transition-all duration-500' style={{ backgroundColor: `rgba(${data.rgb},0.4)` }}>
            <div className='flex flex-col justify-between w-full h-full px-8 py-12 lg:pt-16 lg:pr-20 lg:pb-12 lg:pl-8 gap-12'>
              <div className='fss font-semibold lg:w-full tracking-tighter leading-none'>
                <h1 className='text-6xl md:text-[88px] transition-all duration-500'>Support human stories</h1>
              </div>
              <div className='flex flex-col justify-between gap-12 max-w-[480px]'>
                <div className='text-base md:text-xl tracking-tight text-gray-600 transition-all duration-500'>Become a member to read without limits or ads, fund great writers, and join a global community of people who care about high-quality storytelling.</div>
                <div className='flex gap-4'>
                  <button
                    className={`tracking-normal text-base font-medium md:inline-block px-5 py-2 leading-relaxed rounded-full text-white bg-[#191919] hover:bg-black duration-100 transition-all`}
                    onClick={() => navigate("/signup")}
                  >
                    Get started
                  </button>
                  <button
                    className={`tracking-normal text-base font-medium md:inline-block px-5 py-2 leading-relaxed rounded-full text-black border border-black transition-all`}
                    onClick={() => navigate("/membership")}
                  >
                    View plans
                  </button>
                </div>
              </div>
            </div>
          </div>
      
          <div className='h-[650px] sm:max-w-[330px] md:w-2/6 md:max-w-none'>
            <div className='w-full h-full md:border-l border-black'>
              <div className='flex flex-col h-full overflow-hidden justify-end ' style={{ backgroundColor: `rgba(${data.rgb})` }}>
                <div
                  style={{
                    background: `linear-gradient(rgba(255, 255, 255, 0) 43.75%, rgb(${data.rgb}) 94.27%), url(${data.bgImageSrc})`,
                  }}
                  className='flex flex-grow !bg-cover !bg-no-repeat !bg-center transition-all duration-900 ease-in'
                >
                </div>
      
                <div className='px-12 py-8 '>
                  <div className='flex flex-col justify-between'>
                    <div className='h-32 transition-all duration-500 '>
                      <h1 className='max-h-32 fss font-medium text-4xl line-clamp-3'>
                        {data.content}
                      </h1>
                    </div>
                    <div className='flex gap-3 mt-3'>
                      <div className='w-[48px] h-[48px] rounded-full'>
                        <img src={`${data.userAvatarSrc}`} className=" max-w-none w-[48px] h-[48px] rounded-full object-cover "alt="" />
                      </div>
                      <div className='flex flex-col h-20 text-base font-medium mr-3'>
                        <span>{data.userName}</span>
                        <span className='line-clamp-2 '>{data.userDesignation} <i>{data.userDesignationDetail}</i></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default MembershipHero