import React from 'react'
import RecentPosts from './RecentPosts'
import './Styles/Sidebar.css'
const Sidebar = () => {
  return (
    <>
        <div className='sidebar-container'>
            <div className='action-block'>
                <h5 className='block-header'>About Community</h5>
                <div className='description'>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, nesciunt ex voluptatibus magni unde impedit.</p>
                </div>
                <div className='member-stats-container'>
                    <span>90</span>
                    <span className='member-stats'>members </span>
                </div>
                <button className='post-btn'>Create Post</button>
                
            </div>
            <div className='recent-posts'>
                <h5 className='block-header'>Recent Posts</h5>
                <RecentPosts/>
                <RecentPosts/>
                <RecentPosts/>
                <RecentPosts/>
                <RecentPosts/>
                <RecentPosts/>
            </div>
            <div className='footer'>
                <div className='footer-links'>
                    <div className='col-1'>
                        <a>home</a>
                        <a>chillax</a>
                        <a>study</a>
                    </div>
                    <div className='col-2'>
                        <a>About</a>
                        <a>team</a>
                        <a>github</a>
                        <a>twitter</a>
                        <a>instagram</a>
                        <a>Terms</a>
                    </div>
                </div>
                <p> Hack0 Inc © 2022. All rights reserved</p>

            </div>
        </div>
    </>
  )
}

export default Sidebar