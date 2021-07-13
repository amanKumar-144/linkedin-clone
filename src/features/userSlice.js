import { createSlice } from '@reduxjs/toolkit'

//User Object
const initialState = {
  user:null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login:(state,action)=>{
      state.user=action.payload;
    },
    logout:(state)=>{
      state.user=null
    }
  }
});

export const {login,logout} = userSlice.actions
//To pull information
export const selectUser=(state)=>state.user.user; 
export default userSlice.reducer