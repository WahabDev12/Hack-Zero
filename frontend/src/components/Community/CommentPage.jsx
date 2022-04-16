import React from 'react'
import CommentsSection from './CommentsSection'
import PostDataProvider from './Contexts/PostDataContext'
import PostFormProvider from './Contexts/PostFormContext'
import Sidebar from './Sidebar'
import './Styles/CommentsPage.css'
import Hero from './Hero'

const CommentPage = () => {
  return (
    
    <main id='comments-page'>
       
        <CommentsSection/>
    </main>
  
  )
}

export default CommentPage