import React from 'react'
import PostFormProvider from './Contexts/PostFormContext'
import Feed from './Feed'
import Hero from './Hero'
import PostForm from './PostForm'
import Sidebar from './Sidebar'
import './Styles/Main.css'

const CommunityPage = () => {
  return (
    <>
     <PostFormProvider>
        <Hero/>
        <main id='community'>
            <PostForm/>
            <Feed/>
            <Sidebar/>
        </main>
      </PostFormProvider>
    </>
  )
}

export default CommunityPage