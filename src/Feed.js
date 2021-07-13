import React,{useState,useEffect} from 'react';
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create"
import InputOption from "./InputOption"
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from './Post';
import {db} from "./firebase";
import firebase from "firebase";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from "react-flip-move";

function Feed() {
    const [posts,setPosts]=useState([]);
    const [input,setInput]=useState('');
    const user=useSelector(selectUser);

    //Mapped to posts,database
    //Called at start or any change in Feed.js
    useEffect(()=>{
        db.collection("posts")
        .orderBy("timestamp","desc")
        .onSnapshot(snapshot=>{
            setPosts(snapshot.docs.map(doc=>(
                {
                    id:doc.id,
                    data:doc.data()
                }
            )))
        })
    },[])



    const sendPost=e=>{
        e.preventDefault();
        //Add Post
        db.collection("posts").add({
            name:user.displayName,
            description:user.email,
            message:input,
            photoUrl:user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("");
    }



    return (
        <div className="feed">
            <div className="feed__inputContainer">
                
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input 
                        value={input} 
                        onChange={e => setInput(e.target.value)} 
                        type="text"
                        />
                        <button type="submit" onClick={sendPost}>Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    {/*Input Option*/}
                    <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9"/>
                    <InputOption title="Video" Icon={SubscriptionsIcon} color="#E7A33E"/>
                    <InputOption title="Event" Icon={EventNoteIcon} color="#C0CBCD"/>
                    <InputOption title="Write Article" Icon={CalendarViewDayIcon} color="#7FC15E"/>
                </div>
            </div>


            {/*Posts*/}
            <FlipMove>
                {posts.map(({id,data})=>(
                    <div className="feed__inputPost">
                        <Post 
                        //With key,it only renders the newPost
                        key={id}
                        name={data.name} 
                        message={data.message}
                        description={data.description}
                        photoUrl={data.photoUrl}
                        timestamp={data.timestamp}
                        />
                    </div>
                ))}
            </FlipMove>

        </div>
    )
}

export default Feed
