import React from 'react'
import "./Post.css";
import { Avatar } from '@mui/material';

function Post({username, caption, imageUrl}) {

  return (
    <div className='post'>

      {/* header -> Avatar and username */}
      <div className="post__header">
        <Avatar 
          alt="Remy Sharp" 
          src="/static/images/avatar/1.jpg" 
        />
        <h3>{username}</h3>
      </div>

      {/* Post image and caption */}
      <img className='post__image' src={imageUrl} alt="Post logo" />

      <h4 className='post__text'>
        <strong>{caption}</strong> 
      </h4>

    </div>
  )
}

export default Post