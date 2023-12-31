import React from 'react'
import dbService from '../appwriteServices/data'
import { Link } from 'react-router-dom'

function PostCard({$id, featuredImage, title}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={dbService.getFilePreview(featuredImage)} alt={title} className='rounded-xl'/>
            </div>
            <h2>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard