import {React, useContext, createContext, useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';



export const PostDataContext = createContext();
const BACKEND_URI = "http://localhost:3000/"
const PostDataProvider = ({children}) => {
  const {id} = useParams()
  const [posts, setPosts] = useState(null)
  const getPosts = () => {
        axios.get(BACKEND_URI+`post/${id}`)
            .then( res => {
                console.log(res.data)
                setPosts(res.data)
            })

  }
  useEffect(() => {
      getPosts()
  }, []);
  return (
    <PostDataContext.Provider value = {{posts}}>
            {children}
    </PostDataContext.Provider>
  )
}

export default PostDataProvider