import axios from 'axios'
import {React, useEffect, useState} from 'react'
import Skeleton from 'react-loading-skeleton'
import { useParams } from 'react-router-dom'
import Comment from './Comment'
import Post from './Post'
import './Styles/CommentSection.css'


const Comments = () => {
  const BACKEND_URI = "http://localhost:5000/"
  const {id} = useParams()
  const [post, setPost] = useState(null)
  const [content, setContent] = useState('')
  const [comments, setComments] = useState(null)
  const getPost = () => {
    axios.get(BACKEND_URI + `post/get/${id}`)
        .then((res) => {
          setPost(res.data)
        })
  }
  const submitComment  = () => {

     axios.post(BACKEND_URI + `comment/create/${id}`, {
        content
     }) 
  }
  const getcomments = () => {
      axios.get(BACKEND_URI + `comment/${id}`)
            .then((res) => {
                setComments(res.data)
            })


        
  }
  useEffect(() => {
    getPost()
    getcomments()
  }, [comments]);
  return (
    
    < section id='comment-section'>
        <div className='post-section'>
            {post ? <Post data = {post} /> : <Skeleton height={150}  />}
        </div>
       
        <div className='comment-form'>
            <span>Commented as </span> 
            <textarea value={content} onChange={(e) => {setContent(e.target.value)}} placeholder='What are your thoughts'/>
            <button onClick={submitComment}>comments</button>
        </div>
        <hr className='seperator'></hr>
       { comments ? <div className='comments-container'>
            {comments.map((comment) => {
                return <Comment key = {comment._id} data = {comment}/>
            })}
        </div> : <div class="lds-dual-ring"></div>}
        

    </ section>
  )
}

export default Comments