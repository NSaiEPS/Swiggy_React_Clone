import { createSlice } from "@reduxjs/toolkit";



export const Redux_Slice=createSlice({
    name:'slice',
    initialState:({
        logininfo:[],
        loginuserinfo:[],
        locationinfo:[],
        city:'',
        moreinfo:''

    }),

    reducers:({
        logininfoAction:(state,action)=>{
            state.logininfo=action.payload
        },

        locationAction:(state,action)=>{
            state.locationinfo=action.payload
        },
        cityAction:(state,action)=>{
            state.city=action.payload
        },
        moreInfoAction:(state,action)=>{
            state.moreinfo=action.payload
        }
    }),


})

export const {logininfoAction,locationAction,cityAction,moreInfoAction}=Redux_Slice.actions

export const Selectlogininfo=(store)=>store.redux_store.logininfo
export const Selectlocationinfo=(store)=>store.redux_store.locationinfo
export const Selectcityinfo=(store)=>store.redux_store.city
export const Selectmoreinfo=(store)=>store.redux_store.moreinfo



export default Redux_Slice.reducer