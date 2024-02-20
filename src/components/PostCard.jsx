import React, { useState, useEffect } from 'react'
import dbService from '../appwriteServices/data'
import { Link } from 'react-router-dom'
import axios from "axios"
import config from '../configEnv/config'
import Skeleton from "@mui/material/Skeleton";
import PostCardSkeleton from './PostCardSkeleton'

function PostCard({ $id, userId, featuredImage, title, $createdAt, content }) {
  // const userName = undefined;
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);
  //TODO: fetchuser name
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(`${config.appwriteUrl}/users/${userId}`, {
          headers: {
            "X-Appwrite-Project": config.appwriteProjectId,
            "X-Appwrite-Key": "a2fbfb0db584e4a8a3579d1f32b3d62482fd369da54e5e5bd74951e7c4cfbaa718033e14f42908d60314ca729a6e61f47e25878097360f672af8eaa38d5bbc017b251ff03ed6f70213ae2e8ab3e7b114b7286078d5f5dc01bc873ac776eda662add3c86cf8627b71d45677fcb01458a309ad1377fa02bcf5da963078d834a625"
          }
        });
        setUserName(response.data.name);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
    // console.log("axios:",userName);
  }, []);

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const year = date.getFullYear();

    const currentYear = new Date().getFullYear();

    if (year === currentYear) {
      return `${month} ${day}`;
    } else {
      return `${month} ${day}, ${year}`;
    }
  }

  const calcMinRead = (content, wordsPerMinute = 200) => {
    const wordCount = content?.split(/\s+/).length;
    const readingTimeInMinutes = Math.ceil(wordCount / wordsPerMinute);

    return readingTimeInMinutes;
  }

  return (
    <>
      {loading ? <PostCardSkeleton /> :
        <Link to={`/post/${$id}`}>
          <div className="flex w-full h-38 justify-between align-middle">
            <div className="flex-col w-full my-2 mr-4">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <img src="https://phantom-marca.unidadeditorial.es/9279e8039b9040209f07a16f0201dd63/resize/828/f/jpg/assets/multimedia/imagenes/2023/01/12/16735402991293.jpg" className="h-6 w-6 rounded-full object-cover" alt="Rdj" />
                <div className='capitalize'>
                  <h1 aria-label='author'>
                    {userName}
                  </h1>
                </div>
              </div>
              <div className="py-2 flex flex-col gap-y-1">
                <h2 className="flex font-extrabold leading-5 tracking-tight text-gray-900">{title}</h2>
                <div className='hidden sm:block '> Cumque, assumenda. Incidunt illo quia </div>
              </div>
              <div className='flex  align-baseline justify-between'>
                <div className="flex items-center text-xs whitespace-nowrap font-normal tracking-tighter text-gray-500">
                  <div>{formatDate($createdAt)}</div>
                  <div className="px-1">
                    <span className="relative top-[-0.2rem]">.</span>
                  </div>
                  <div>{calcMinRead(content)} min read</div>
                  <div className="px-1 hidden sm:block">
                    <span className="relative top-[-0.2rem]">.</span>
                  </div>
                  <div className='px-2 py-1 rounded-full bg-slate-100 hidden sm:block'>
                    Japan
                  </div>
                </div>
                <div className="">
                  <div className='mr-1 sm:mr-2'>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="" className="text-gray-400 hover:text-[#ffc117] " aria-label="Add to list bookmark button"><path d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z" fill="currentColor"></path></svg>
                  </div>
                </div>
              </div>
            </div>
            <div className=" sm:w-52">
              <div className=" overflow-hidden  w-36 h-full sm:w-52">
                <img className="w-36 h-28 sm:h-36 sm:w-52 object-cover" src={dbService.getFilePreview(featuredImage)} alt="" />
              </div>
            </div>
          </div>
        </Link>}
    </ >
  )
}

export default PostCard