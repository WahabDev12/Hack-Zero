import {React, useContext} from 'react'


const RecentPosts = ({post}) => {
  
 
  return (
    <a href='#'>
       
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
                        <span>7 comments</span> <span>2d</span>
                    </div>
                </div>
                <hr></hr>
            </>
           
        </div>
    </a>
  )
}

export default RecentPosts