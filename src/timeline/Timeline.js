import React, { useState } from 'react'
import "./Timeline.css"
import Suggestions from './Suggestions'
import Post from './posts/Post'

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "adrij_13",
      postImage: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      likes: 12,
      timestamp: "2h"
    },
    {
      user: "neesa_45",
      postImage: "https://images.unsplash.com/photo-1695116751486-4bf51316851a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      likes: 56,
      timestamp: "12h"
    },
    {
      user: "bob_8",
      postImage: "https://images.unsplash.com/photo-1694789309553-0c4ef0450884?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      likes: 30,
      timestamp: "2d"
    }
  ])

  return (
    <div className='timeline'>
      <div className='timeline__left'>
        <div className='timeline__posts'>
          {posts.map((post) =>(
            <Post 
              user={post.user} 
              postImage={post.postImage} 
              likes={post.likes} 
              timestamp={post.timestamp} />
          ))}
        </div>
      </div>
      <div className='timeline__right'>
        <Suggestions />
      </div>
    </div>
  )
}

export default Timeline