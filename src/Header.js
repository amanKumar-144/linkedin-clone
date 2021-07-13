import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {useDispatch, useSelector} from "react-redux";
import { selectUser,logout,login } from "./features/userSlice.js";
import {auth} from "./firebase";

function Header() {
    const user=useSelector(selectUser)
    const dispatch=useDispatch()
    const logOutApp=()=>{
        dispatch(logout);
        auth.signOut();
    };

    return (
        <div className='header'>
           <div className='header__left'>
                <img
                src="https://yt3.ggpht.com/ytc/AAUvwnjXhBUljQjJm08Lceeb0KDgVt4Z8vkfEsbGtP1BUEs=s900-c-k-c0x00ffffff-no-rj"
                alt="NoImage"
                />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text"/>
                </div>
           </div>


           <div className="header__right">
               <HeaderOption Icon={HomeIcon} title="Home"/>
               <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
               <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
               <HeaderOption Icon={ChatIcon} title="Messaging"/>
               <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
               <HeaderOption avatar={true} title="Me"
               onClick={logOutApp}
               />
           </div>
        </div>
    )
}

export default Header
