import {React, useContext} from 'react'
import Skeleton from 'react-loading-skeleton'
import { PostDataContext } from './Contexts/PostDataContext'
import Post from './Post'
import './Styles/Feed.css'



const Feed = () => {
  const {posts} = useContext(PostDataContext)
  return (
    <>
        <main className='feed-container' >
           {posts ? posts.map((post) => {
                return <Post key={post._id} data= {post} /> 
           }) : [1,2,3,4].map((e) => { return <Post key={e} data = {null} />}) }
        </main>
        
    </>
  )
}

export default Feed