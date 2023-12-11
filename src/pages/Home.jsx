import React, {useEffect, useState} from 'react'
import appwriteService from "../appwriteServices/data";
import {Container, PostCard, Hero} from '../components'
import { useSelector } from 'react-redux'



function Home() {
    const [posts, setPosts] = useState([])
    const loginStatus = useSelector(state => state.status);


    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [loginStatus])
  
    // if (posts.length === 0) {
    //     return (
    //         <div className="w-full">
    //             <div className="flex flex-wrap ">
    //                 <div className="w-full">
    //                     <Hero />
    //                 </div>
    //             </div>
    //         </div>            
    //     )
    // }
    return (
        <div className='w-full pt-0 pb-8'>
            {!loginStatus? (<div className="w-full flex flex-wrap border-b border-black bg-[#ffc017]">
                   <Hero />
                </div>):null
            }
            <Container>
                <div className='flex mt-3 flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home