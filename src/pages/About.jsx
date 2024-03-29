import React from 'react'
import { Link } from 'react-router-dom'
import { Logo,Footer} from '../components'

function About() {
  return (
    <>
      <div className='w-full pt-0 bg-[#242424] h-full bg-[url("https://miro.medium.com/v2/resize:fit:963/format:webp/7*3l9Fl9UIQBgkR_Vu2_ihLg.png")]'>
        <section className='flex flex-col'>
          <div className='mx-5 xs:mx-8 text-left mt-20 mb-20 lg:mb-32 lg:mt-28 md:w-[650px]'>
            <div className=" font-sans text-white w-full ">
              <div className='fss text-6xl xs:text-7xl md:text-8xl font-medium tracking-tight mb-11 sm:mb-20'>
                Everyone has a story to tell.
              </div>
              <div className='text-xl tracking-tight mb-5'>
                Medium is a home for human stories and ideas. Here, anyone can share insightful perspectives, useful knowledge, and life wisdom with the world—without building a mailing list or a following first. The internet is noisy and chaotic; Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right audience for whatever you have to say.
              </div>
              <div className='text-xl tracking-tight mb-6'>
                We believe that what you read and write matters. Words can divide or empower us, inspire or discourage us. In a world where the most sensational and surface-level stories often win, we’re building a system that rewards depth, nuance, and time well spent. A space for thoughtful conversation more than drive-by takes, and substance over packaging.
              </div>
              <div className='text-3xl tracking-tight mb-10'>
                <span className='pr-1 bg-[#505050] leading-snug border-2 rounded-sm border-[#505050]'>
                  Ultimately, our goal is to deepen our collective understanding of the world through the power of writing.
                </span>
              </div>
              <div className='text-xl tracking-tight mb-6'>
                Over 100 million people connect and share their wisdom on Medium every month. Many are professional writers, but just as many aren’t — they’re CEOs, computer scientists, U.S. presidents, amateur novelists, and anyone burning with a story they need to get out into the world. They write about what they’re working on, what’s keeping them up at night, what they’ve lived through, and what they’ve learned that the rest of us might want to know too.
              </div>
              <div className='text-xl tracking-tight mb-10'>
                Instead of selling ads or selling your data, we’re supported by a growing community of <u>Medium members</u> who align with our mission. If you’re new here, <u>start exploring</u>. Dive deeper into whatever matters to you. Find a post that helps you learn something new, or reconsider something familiar—and then <u>share your own story</u>.
              </div>
              <div className='text-3xl tracking-tight  mb-10 md:w-[390px]'>
                <span className='pr-1 bg-[#505050] leading-snug'>
                  Designed by <i><u>Medium</u></i> & developed by <i><u>Jatin Thakur</u> </i>.😊
                </span>
              </div>
              <div className='text-xl tracking-tight mb-10'>
                This website is a project developed solely for showcasing my skills in React and web development. It is not affiliated with or endorsed by Medium in any way. The content presented here, including articles, images, and any other media, is for demonstration purposes only and should not be considered as representing the actual Medium platform. All trademarks and copyrights belong to their respective owners. --{">"} <a href='https://medium.com/' target='_blank'><u><b>Visit Medium</b></u></a>
              </div>
            </div>
          </div>
        </section>
        <div className="border-t border-white  hover:text-black text-white hover:bg-white ease-out duration-500">
          <Link to="/">
            <div className='flex justify-between items-center p-9 xs:p-14 text-4xl xs:text-7xl font-medium tracking-tight fss'>
              <span>Start Reading</span>
              <span className='text-4xl xs:text-7xl font-semibold '>→</span>
            </div>
          </Link>
        </div>
        <div className="border-t border-white  hover:text-black text-white hover:bg-white ease-out duration-500">
          <Link to="/login">
            <div className='flex justify-between items-center p-9 xs:p-14 text-4xl xs:text-7xl font-medium tracking-tight fss'>
              <span>Start Writing</span>
              <span className='text-4xl xs:text-7xl font-semibold '>→</span>
            </div>
          </Link>
        </div>
        <div className="border-t border-white  hover:text-black text-white hover:bg-white ease-out duration-500">
          <Link to="/membership">
            <div className='flex justify-between items-center p-9 xs:p-14 text-4xl xs:text-7xl font-medium tracking-tight fss'>
              <span>Become a member</span>
              <span className='text-4xl xs:text-7xl font-semibold '>→</span>
            </div>
          </Link>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default About