import React from 'react'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

function Membership() {
  return (
    <>
        <div className="w-full relative flex flex-col md:flex-row border-b border-black">
            <div className='md:h-[650px] w-4/6'>
                <div className='flex flex-col w-full h-full lg:pt-16 lg:pr-20 lg:pb-12 lg:pl-8'>
                   <div className='lg:w-full'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem eveniet numquam ullam distinctio ipsam corrupti.
                   </div>
                   <div className=''>ln</div>
                </div>
            </div>

            <div className='h-[650px] w-2/6'>
                <div className='w-full h-full md:border-l border-black'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque sequi in cupiditate est blanditiis natus.
                </div>
            </div>
        </div>

        <div className='flex flex-col lg:flex-row py-20 px-8 gap-12 border-b border-black'>
            <div className='font-medium lg:max-w-[480px] tracking-tight'>
                <h2 className='fss text-5xl lg:text-7xl sticky top-40'>Why Membership?</h2>
            </div>
            <div className='flex flex-col lg:max-w-2xl gap-24 md:gap-32'>
                <div className='flex flex-col gap-4'>
                    <div className='fss text-5xl font-medium tracking-tight'>Reward writers</div>
                    <div className='text-xl'>
                        Your membership directly supports the writers, editors, curators, and teams who make Medium a vibrant, inclusive home for human stories. A portion of your membership is allocated to the writers of the stories you read and interact with.
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='fss text-5xl font-medium tracking-tight'>Unlock every story</div>
                    <div className='text-xl'>
                        Get access to millions of original stories that spark bright ideas, answer big questions, and fuel bold ambitions.
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='fss text-5xl font-medium tracking-tight'>Enhance your reading experience</div>
                    <div className='text-xl'>
                        Immerse yourself in audio stories, read offline wherever you go, and connect with the Medium community on Mastodon.                    
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='fss text-5xl font-medium tracking-tight'>Elevate your writing</div>
                    <div className='text-xl'>
                        Create and contribute to publications to collaborate with other writers, create a custom domain for your profile, and level up your writing with our simple but powerful publishing tools.
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='fss text-5xl font-medium tracking-tight'>Support a mission that matters</div>
                    <div className='text-xl'>
                        Members are creating a world where original, human-crafted stories thrive. As a member-supported platform, quality comes first, not ads or clickbait.
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col lg:flex-row py-20 px-8 gap-12'>
            <div className='font-medium lg:max-w-[480px] tracking-tight'>
                <h2 className='fss text-5xl md:text-7xl sticky top-40'>What members are saying</h2>
            </div>
            <div className='flex flex-col lg:max-w-2xl gap-24 md:gap-32'>
                <div className='flex flex-col md:flex-row gap-7'>
                    <div className="w-2/12">
                        <div className='w-20 h-20 overflow-hidden'>
                            <img src="https://media.licdn.com/dms/image/C5103AQFsEjJ7EDrdXw/profile-displayphoto-shrink_400_400/0/1517591992557?e=2147483647&v=beta&t=U4yUatI7jAj2Hh_AaI_BtHGu2PAay1muNMJqdASaT_0"  className='object-cover w-20 h-20 rounded-full 'alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className=" text-lg md:text-xl text-[#242424]">In the world of social media, the easy route often promotes the cheapest, tackiest, and lowest-effort content. However, Medium stands apart. Here, you encounter content that elevates your intellect—a refreshing departure from the mundane. As a reader and writer, I appreciate that distinctive quality.</div>
                        <div className="text-base text-black font-medium"><span className='font-semibold'>Anthony E. Stark</span>, CEO and Chairmen of Strak Industries and Medium member</div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-7'>
                    <div className="w-2/12">
                        <div className='w-20 h-20 overflow-hidden'>
                            <img src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Bruce-Banner.The-Incredible-Hulk.webp"  className='object-cover w-20 h-20 rounded-full 'alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className=" text-lg md:text-xl text-[#242424]">Medium, a true game-changer. Among my many subscriptions, it quickly became the most valued. The cost is negligible compared to the immense value it consistently delivers month after month. A transformational investment in knowledge.</div>
                        <div className="text-base text-black font-medium"><span className='font-semibold'>Dr. Bruce Banner</span>, Scientist and Nuclear physicist at Culver University, Virginia and Medium member.</div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-7'>
                    <div className="w-2/12">
                        <div className='w-20 h-20 overflow-hidden'>
                            <img src="https://3.bp.blogspot.com/-DCGN-EhmFro/W7-pFiSV8iI/AAAAAAAALng/2TahHX8i5M8zU9iBtJFJDIchCv7oIbuOQCLcBGAs/s1600/maxresdefault.jpg"  className='object-cover w-20 h-20 rounded-full 'alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className=" text-lg md:text-xl text-[#242424]">For tech enthusiasts, Medium membership unveils a treasure trove of high-quality articles. The cost? A mere fraction of one good tech book. Choose between one book or unlocking countless insights on Medium—my career's best investment.
                        </div>
                        <div className="text-base text-black font-medium"><span className='font-semibold'>Dr. Jane Foster</span>, 	
                            Astrophysicist Consultant for S.H.I.E.L.D. and Medium member
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div className='bg-white p-6 flex flex-wrap justify-center xs:justify-between'>
        <span>
          <Link to='/'>
            <Logo props='w-[9rem] xs:w-[10rem]' fill='black' />
          </Link>
        </span>
        <div className='flex text-[10px] py-2 gap-2 items-center'>
          <Link to='#'><span className=''><u className=''>About</u></span></Link>
          <Link to='/'><span className=''><u className=''>Terms</u></span></Link>
          <Link to='/'><span className=''><u className=''>Privacy</u></span></Link>
          <Link to='/'><span className=''><u className=''>Help</u></span></Link>
          <Link to='/'><span className=''><u className=''>Teams</u></span></Link>
          <Link to='/'><span className=''><u className=''>Press</u></span></Link>
        </div>
      </div>
    </>
  )
}

export default Membership