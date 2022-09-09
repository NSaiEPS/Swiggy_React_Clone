import { createSlice } from "@reduxjs/toolkit";



export const Redux_Slice=createSlice({
    name:'slice',
    initialState:({
        logininfo:[],
        loginuserinfo:[],
        locationinfo:[],
        city:'',
        moreinfo:'',
        reqFilter:'',
        filtersInfo:{},
        filterData:{},
        newLocationSearch:false,
        selectIteminfo:[]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

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
        },
        reqFilterAction:(state,action)=>{
            state.reqFilter=action.payload
        },
        filterInfoAction:(state,action)=>{
            state.filtersInfo=action.payload
        },
        filterDataInfoAction:(state,action)=>{
            state.filterData=action.payload
        },
        newLocationSearchAction:(state,action)=>{
            state.newLocationSearch=action.payload
        },

        loginUserInfoAction:(state,action)=>{
            state.loginuserinfo=action.payload
        },
        selectItemInfoAction:(state,action)=>{
            state.selectIteminfo=action.payload
        }
    }),


})

export const {logininfoAction,locationAction,cityAction,
    moreInfoAction,reqFilterAction,filterInfoAction,filterDataInfoAction,
    newLocationSearchAction,loginUserInfoAction,selectItemInfoAction}=Redux_Slice.actions

export const Selectlogininfo=(store)=>store.redux_store.logininfo
export const Selectlocationinfo=(store)=>store.redux_store.locationinfo
export const Selectcityinfo=(store)=>store.redux_store.city
export const Selectmoreinfo=(store)=>store.redux_store.moreinfo
export const SelectreqFilter=(store)=>store.redux_store.reqFilter
export const SelectFilterInfo=(store)=>store.redux_store.filtersInfo
export const SelectDataFilterInfo=(store)=>store.redux_store.filterData
export const SelectnewLocationSearch=(store)=>store.redux_store.newLocationSearch
export const SelectLoginUserInfo=(store)=>store.redux_store.loginuserinfo
export const SelectedItemInfo=(store)=>store.redux_store.selectIteminfo



export default Redux_Slice.reducer




