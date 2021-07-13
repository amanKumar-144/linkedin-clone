import React,{useEffect} from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import { selectUser,logout,login } from "./features/userSlice.js"
import { useDispatch,useSelector } from "react-redux";
import Login from './Login';
import {auth} from "./firebase";
import Widgets from './Widgets';

function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  //Refresh Problem
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth)//User logged in
      {
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoUrl:userAuth.photoURL,
        }))
      }
      else{//User logged out
        dispatch(logout());
      }
    })
  },[])


  return (
    <div className="app">
      {/*Header*/}
      <Header />
      {!user ? (<Login/>):(
        <div className="app__body">
          {/*Sidebar*/}
          <Sidebar />

          {/*Feed*/}
          <Feed/>


          {/*Widgets*/}
          <Widgets/>
        </div>
      )}

    </div>
  );
}
export default App;
