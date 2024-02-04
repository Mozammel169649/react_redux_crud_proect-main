import { createSlice } from "@reduxjs/toolkit";

const userInitialState = {
    user:[
        {
          email:"mozammel@gmail.com",
          title :"mozammel hossain"
        }
    ]
}
const UserSlice = createSlice({
    name : "user",
    initialState : userInitialState,
    reducers :{
        showUser :(state)=> state,
        addUser : (state, action) =>{
            console.log(action.payload , state.user);
            // state.user.push(action.payload),
        } 
    }
})

export const {showUser ,addUser} = UserSlice.actions ;
export default UserSlice ;