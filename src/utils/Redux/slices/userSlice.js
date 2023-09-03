/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const uidSession = localStorage.getItem("uid");
const displayNameSession = localStorage.getItem("displayName");
const emailSession = localStorage.getItem("email");
const photoUrlSession = localStorage.getItem("photoUrl");

const initialState = {
    uid: uidSession || "",
    email: emailSession || "",
    displayName: displayNameSession  || "",
    photoUrl: photoUrlSession || ""
  };

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        addUser: (state, action) => {
            return action.payload;
        },
        removeUser: (state, action) => {
            // return null;
            state.uid = ''; 
            state.email = ''; 
            state.displayName = ''; 
            state.photoUrl = ''; 
        }
    }
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;