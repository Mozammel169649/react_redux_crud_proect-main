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
            state.user.push(action.payload);

        },
        deleteUser : (state, action) =>{
            const email = action.payload;
           state.user = state.user.filter(user => user.email !== email);

        },
        updateUserDate : (state, action) =>{
            // const {email ,title} = action.payload;
            console.log(action.payload);
        },
    }
})

export const {showUser ,addUser, deleteUser, updateUserDate} = UserSlice.actions ;
export default UserSlice ;