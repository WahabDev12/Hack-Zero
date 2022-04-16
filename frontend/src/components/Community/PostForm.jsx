import {React, useState, useContext, useEffect} from 'react'
import Modal from 'react-modal'
import { formContext } from './Contexts/PostFormContext'
import './Styles/Modal.css'
import 'animate.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { userContext } from './Contexts/userContext'
import {PostDataContext} from './Contexts/PostDataContext'


const PostForm = () => {

  const {postFormIsOpen, setPostFormOpen} = useContext(formContext)
  const [title, setTitle] = useState('')
  const [subContent, setSubContent] = useState('')
  const {user, setUser} = useContext(userContext)
  const {community} = useContext(PostDataContext)
  
  const handleModal = () => {
      setPostFormOpen(false)
  }
  const {id} = useParams()
  const BACKEND_URI = "http://localhost:5000/"
  const submitPost = (e) => {
      e.preventDefault()
      const post = {
          username: user.username,
          title,
          subContent
      }
      axios({
        method: 'post',
        url: BACKEND_URI + `post/create/${id}`,
        withCredentials: true,
        data:{
            post
        }
        })
      .then(setPostFormOpen(false))
  }
  return (
    <>
        <Modal
        className='animate__animated animate__slideInUp animate__faster'
        isOpen={postFormIsOpen}
        style={{
            overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                zIndex: 10000
              },
              content: {
                margin: "auto",
                maxWidth: "50vw",
                maxHeight: "50vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: 'absolute',
                top: '40px',
                left: '40px',
                right: '40px',
                bottom: '40px',
                border: '1px solid #ccc',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px'
              }
        }}
        
        >
            <h1 className='postForm-header'>Create a Post</h1>
            <button onClick={handleModal} className='close-btn'>&times;</button>
            <form>
                {community && <div className='post-form-container'>
                    <input value={title} onChange={(e) => {setTitle(e.target.value)}} placeholder='Title' className='postForm-input'/>
                    <textarea value={subContent} onChange={(e) => {setSubContent(e.target.value)}} placeholder='Text(Optional)' className='postForm-input-large'></textarea>
                    {user && community.members.includes(user._id) ? <button onClick={submitPost} className='post-btn'>Post</button> : <span>Join our community to make posts!</span>}
                </div>}
                
            </form>
        </Modal>
    </>
  )
}

export default PostForm