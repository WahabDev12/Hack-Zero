import React from 'react'
import './Styles/Comment.css'

const Comment = () => {
  return (
    <>
        <div className='comment-container'>
            <div className='comment-meta'>
                <img src='/science-logo.jpg'/>
                <span>author</span><span>2hrs ago</span>
            </div>
        
            <div className='comment-text'>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>

    </>
  )
}

export default Comment