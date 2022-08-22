import { createSlice } from "@reduxjs/toolkit";



export const Redux_Slice=createSlice({
    name:'slice',
    initialState:({
        logininfo:[],
        loginuserinfo:[],

    }),

    reducers:({
        logininfoAction:(state,action)=>{
            state.logininfo=action.payload
        }
    })
})

export const {logininfoAction}=Redux_Slice.actions

export const Selectlogininfo=(store)=>store.redux_store.logininfo



export default Redux_Slice.reducer