import { Avatar } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./Sidebar.css"
function Sidebar() {

    const user=useSelector(selectUser);

    const recentItem=(topic) =>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img
                src="https://blog.paper.li/wp-content/uploads/2020/02/LinkedIn-banner-19-1024x256.png"
                alt="No Image"/>
                <Avatar className="sidebar__avatar" src={user.photoUrl}>{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>



            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on Post</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>
            </div>



            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('React.js')}
                {recentItem('Programming')}
                {recentItem('Software Engg.')}
                {recentItem('ICPC')}
                {recentItem('Google')}
            </div>
        </div>
    )
}

export default Sidebar;
