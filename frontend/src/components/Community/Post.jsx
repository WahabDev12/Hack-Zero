import {React, useState} from 'react'
import './Styles/Post.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'



const Post = ({data}) => {

  const [vote, setVote]  = useState()
  const BACKEND_URI = "http://localhost:3000/"
  const {id} = useParams()
  const navigate = useNavigate()
  const submitUpvote = () => {
      console.log("clicked")
      axios.patch(BACKEND_URI + `post/vote`,{
         postID: data._id
      })
            
  }
  const openComments = () => {
        console.log("clicked")
        navigate(`/comment/${data._id}`)

  }
  return (
    <>
        <div onClick = {openComments} className='post-container'>
            <div className='upvotes-section'>
                <i onClick={submitUpvote} class="fa-solid fa-square-caret-up"></i>
                <span className='upvotes-value'>{data.upvotes}</span>
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
                        {data.title}
                    </h3>
                    <div>
                        <p className='post-sub'>
                          {data.subContent}
                        </p>
                    </div>
                    
                </div>
                <div className='engagement-tray'>
                    <div onclick = {openComments} className='comment-icon'>
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