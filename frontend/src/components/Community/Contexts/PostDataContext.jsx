import {React, useContext, createContext, useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';



export const PostDataContext = createContext();
const BACKEND_URI = "http://localhost:5000/"
const PostDataProvider = ({children}) => {
  const {id} = useParams()
  const [posts, setPosts] = useState(null)
  const getPosts = () => {
        console.log("id is " + id)
        axios.get(BACKEND_URI+`post/${id}`)
            .then( res => {
                setPosts(res.data)
            })

  }
  useEffect(() => {
      getPosts()
  }, [posts]);
  return (
    <PostDataContext.Provider value = {{posts}}>
            {children}
    </PostDataContext.Provider>
  )
}

export default PostDataProvider