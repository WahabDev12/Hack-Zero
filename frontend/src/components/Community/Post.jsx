import {React, useState, useEffect} from 'react'
import './Styles/Post.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



const Post = ({data}) => {

  const [vote, setVote]  = useState()
  const BACKEND_URI = "http://localhost:3000/"
  const {id} = useParams()
  const [comments, setComments] = useState(null)
  const navigate = useNavigate()
  const submitUpvote = () => {
      axios.patch(BACKEND_URI + `post/vote`,{
         postID: data._id
      })
            
  }
  const getcomments = () => {
    axios.get(BACKEND_URI + `comment/${data._id}`)
          .then((res) => {
              setComments(res.data)
          })


      
}
  const openComments = () => {
        console.log("clicked")
        navigate(`/comment/${data._id}`)

  }

  useEffect(() => {
      getcomments()
  }, [comments]);
  return (
    <>
        <div className='post-container'>
            <div className='upvotes-section'>
                <i onClick={submitUpvote} class="fa-solid fa-square-caret-up"></i>
                <span className='upvotes-value'>{data.upvotes}</span>
                <i class="fa-solid fa-square-caret-down"></i>
            </div>
            <div className='post-content'>
                <div className='post-meta-data'>
                    {<span className='community-tag'></span>}
                    {<span className='post-author'>Posted by </span>}
                    {<span className='timestamp'></span>}
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
               { comments &&  <div className='engagement-tray'>
                    <div onClick = {openComments} className='comment-icon'>
                         <i class="fa-regular fa-message"></i> 
                         <span> <span>{comments.length}</span> Comments</span>
                    </div>
                    <div className='share-icon'>
                         <i class="fa-solid fa-share"></i>
                         <span>Share</span>
                    </div>
                </div>}
               

            </div>
        </div>
    </>
  )
}

export default Post