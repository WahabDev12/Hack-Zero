import {React, useState, useContext, useEffect} from 'react'
import Modal from 'react-modal'
import { formContext } from './Contexts/PostFormContext'
import './Styles/Modal.css'
import 'animate.css'

const PostForm = () => {
  const {postFormIsOpen, setPostFormOpen} = useContext(formContext)
  const handleModal = () => {
      setPostFormOpen(false)
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
                backgroundColor: 'rgba(255, 255, 255, 0.65)'
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
                <div className='post-form-container'>
                    <input placeholder='Title' className='postForm-input'/>
                    <textarea placeholder='Text(Optional)' className='postForm-input-large'></textarea>
                    <button className='post-btn'>Post</button>
                </div>
                
            </form>
        </Modal>
    </>
  )
}

export default PostForm