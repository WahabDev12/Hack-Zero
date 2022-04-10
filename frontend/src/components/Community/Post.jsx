import React from 'react'
import './Styles/Post.css'

const Post = () => {
  return (
    <>
        <div className='post-container'>
            <div className='upvotes-section'>
                <i class="fa-solid fa-square-caret-up"></i>
                <span className='upvotes-value'>90</span>
                <i class="fa-solid fa-square-caret-down"></i>
            </div>
            <div className='post-content'>
                <div className='post-meta-data'>
                    <span className='community-tag'></span>
                    <span className='post-author'>Posted by </span>
                    <span className='timestamp'></span>
                </div>
                <div className='post-text'>
                    <h3 className='post-title'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate corrupti quibusdam dignissimos, doloremque id nam.
                    </h3>
                    <div>
                        <p className='post-sub'>
                          quibusdam iusto quod laborum eius recusandae molestias qui similique? Sed incidunt cupiditate voluptates quasi!
                        </p>
                    </div>
                    
                </div>
                <div className='engagement-tray'>
                    <div className='comment-icon'>
                         <i class="fa-regular fa-message"></i> 
                         <span> <span>9</span> Comments</span>
                    </div>
                    <div className='share-icon'>
                         <i class="fa-solid fa-share"></i>
                         <span>Share</span>
                    </div>
                </div>
               

            </div>
        </div>
    </>
  )
}

export default Post