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
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat odit nemo recusandae nisi iure magni maxime? Quis doloribus molestias cum iure sequi nulla vel aspernatur expedita dignissimos voluptatibus sed optio at, quas, autem minus recusandae aliquam? Laudantium necessitatibus eos tempora perspiciatis esse, tenetur eligendi et optio culpa suscipit reprehenderit quis qui eum sunt cum fugiat, fugit aliquid laborum nostrum dolore delectus consequatur! Sequi harum, facilis perferendis, quibusdam iusto quod laborum eius recusandae molestias qui similique? Sed incidunt cupiditate voluptates quasi!
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