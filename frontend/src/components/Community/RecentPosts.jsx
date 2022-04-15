import {React, useContext, useState, useEffect} from 'react'
import axios from 'axios'


const RecentPosts = ({post}) => {
    const BACKEND_URI = "http://localhost:3000/"
    const [comments, setComments] = useState(null)
    const getcomments = () => {
        axios.get(BACKEND_URI + `comment/${post._id}`)
              .then((res) => {
                  setComments(res.data)
              })
    
    
          
    }
    useEffect(() => {
        getcomments()
    }, []);
  
 
  return (
    <a className='recent' href= {`/comment/${post._id}`}>
       
        <div className='recent-post'>
            
            <>
                <div className='post-img-small'>
                    <img src='/website-content.png'/>
                   
                </div>
                <div>
                    <h4 className='post-header'>
                        {post.title}
                    </h4>
                    <div className='post-stats'>
                        <span>{comments ? comments.length : 0} comments</span> <span>2d</span>
                    </div>
                </div>
                <hr></hr>
            </>
           
        </div>
    </a>
  )
}

export default RecentPosts