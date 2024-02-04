import { createSlice } from "@reduxjs/toolkit";

const userInitialState =()=>{
    user:[
        {
          email:"mozammel@gmail.com",
          title :"mozammel hossain"
        }
    ]
}
export const userSlice = createSlice({
    name : "user",
    initialState : userInitialState,
    reducers :{
        showUser :(state)=> state,
    }
})

export const {showUser} = userSlice.actions ;