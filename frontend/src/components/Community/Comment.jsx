import React from 'react'
import './Styles/Comment.css'

const Comment = ({data}) => {
  return (
    <>
        <div className='comment-container'>
            <div className='comment-meta'>
                <img src='/science-logo.jpg'/>
                <span>author</span><span>2hrs ago</span>
            </div>
        
            <div className='comment-text'>
                <p>{data.content}</p>
            </div>
        </div>

    </>
  )
}

export default Comment