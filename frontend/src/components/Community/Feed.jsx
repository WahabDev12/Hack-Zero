import {React, useContext} from 'react'
import { PostDataContext } from './Contexts/PostDataContext'
import Post from './Post'
import './Styles/Feed.css'



const Feed = () => {
  const {posts} = useContext(PostDataContext)
  return (
    <>
        <main className='feed-container' >
           {posts && posts.map((post) => {
                return <Post data= {post} />
           })}
        </main>
        
    </>
  )
}

export default Feed