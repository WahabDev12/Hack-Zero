import React from 'react'
import Feed from './Feed'
import Sidebar from './Sidebar'
import './Styles/Main.css'

const CommunityPage = () => {
  return (
    <>
      <main id='community'>
        <Feed/>
        <Sidebar/>
      </main>
    </>
  )
}

export default CommunityPage