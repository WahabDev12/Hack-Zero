import axios from 'axios'
import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Comment from './Comment'
import Post from './Post'
import './Styles/CommentSection.css'


const Comments = () => {
  const BACKEND_URI = "http://localhost:3000/"
  const {id} = useParams()
  const [post, setPost] = useState(null)
  const [content, setContent] = useState('')
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
  useEffect(() => {
    getPost()
  }, []);
  return (
    
    < section id='comment-section'>
        <div className='post-section'>
            {post && <Post data = {post} />}
        </div>
       
        <div className='comment-form'>
            <span>Commented as </span> 
            <textarea value={content} onChange={(e) => {setContent(e.target.value)}} placeholder='What are your thoughts'/>
            <button onClick={submitComment}>comments</button>
        </div>
        <hr className='seperator'></hr>
        <div className='comments-container'>
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
        

    </ section>
  )
}

export default Comments