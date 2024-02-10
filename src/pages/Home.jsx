import React, { useEffect, useState } from 'react'
import appwriteService from "../appwriteServices/data";
import { Container, PostCard, Hero, Trending, PostCardSkeleton } from '../components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { skeletonClasses } from '@mui/material';
import axios from "axios"
import config from '../configEnv/config';
import { LibraryAddCheckTwoTone } from '@mui/icons-material';



function Home() {
    const [posts, setPosts] = useState([])
    const [trendingPosts, setTrendingPosts] = useState([])
    const loginStatus = useSelector(state => state.status);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
                console.log(posts.documents);
                //TODO: Make setloading false
                setLoading(false);
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
            {!loginStatus ? (
                <>
                    <div className="w-full border-b border-black bg-[#ffc017]">
                        <Hero />
                    </div>
                    <div className='w-full border-b'>
                        <Trending posts={trendingPosts} />
                    </div>
                </>
            ) : null
            }
            <Container>
                <div className="lg:grid lg:grid-cols-12 lg:grid-rows-1">
                    <section className="col-start-1 row-start-1 col-span-7 block overflow-visible lg:overflow-y-scroll pt-2">
                        {posts.map((post) => (
                            <div key={post.$id} className='mb-4'>
                                <PostCard {...post} />
                            </div>
                        ))}
                        {loading && (
                            <>
                                <PostCardSkeleton />
                                <PostCardSkeleton />
                            </>
                        )}
                    </section>
                    <aside className=" row-start-1 col-start-9 col-span-4 ">
                        <div className="max-w-96 bg-white sticky top-24">
                            <div className="flex-col ">
                                <div className="font-medium">Discover more of what matters to you</div>
                                <div>
                                    <div className="flex flex-wrap gap-x-3 gap-y-6 py-4 text-sm font-medium lead ">
                                        <a href="#">
                                            <div className="">
                                                <span className="bg-slate-100 px-3 py-2 items-center rounded-full">Programming</span>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="">
                                                <span className="bg-slate-100 px-3 py-2 items-center rounded-full">Data Science</span>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="">
                                                <span className="bg-slate-100 px-3 py-2 items-center rounded-full">Technology</span>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="">
                                                <span className="bg-slate-100 px-3 py-2 items-center rounded-full">Self Improvement</span>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="">
                                                <span className="bg-slate-100 px-3 py-2 items-center rounded-full">Writing</span>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="">
                                                <span className="bg-slate-100 px-3 py-2 items-center rounded-full">Relationship</span>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="">
                                                <span className="bg-slate-100 px-3 py-2 items-center rounded-full">Machine Learning</span>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="">
                                                <span className="bg-slate-100 px-3 py-2 items-center rounded-full">React js</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="text-sm my-4 text-green-600 font-medium">
                                    <a href="">
                                        See more topics
                                    </a>
                                </div>
                            </div>
                            <div
                                className="border-t-2 mt-6 pt-5 flex flex-wrap tracking-tight text-[14px] font-[500] justify-start gap-x-6 text-gray-600 "
                            >
                                <Link to='https://github.com/JatinThakur-12/medium-clone' target='_blank'><span>GitHub</span></Link>
                                <Link to='https://www.linkedin.com/in/thakurjatinx/' target='_blank'><span>LinkedIn</span></Link>
                                <Link to='/about'><span>About</span></Link>
                                <Link to='/membership'><span>Membership</span></Link>
                                {/* <Link to=''><span>Help</span></Link>
                                <Link to=''><span>Status</span></Link>
                                <Link to=''><span>Careers</span></Link>
                                <Link to=''><span>Blog</span></Link>
                                <Link to=''><span>Privacy</span></Link>
                                <Link to=''><span>Terms</span></Link>
                                <Link to=''><span>Text to Speech</span></Link>
                                <Link to=''><span>Teams</span></Link> */}
                            </div>
                        </div>
                    </aside>
                </div>
            </Container>
        </div>
    )
}

export default Home