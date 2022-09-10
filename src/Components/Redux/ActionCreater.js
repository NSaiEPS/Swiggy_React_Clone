// import { createSlice } from "@reduxjs/toolkit";



// export const Redux_Slice=createSlice({
//     name:'slice',
//     initialState:({
//         logininfo:[],
//         loginuserinfo:[],
//         locationinfo:[],
//         city:'',
//         moreinfo:'',
//         reqFilter:'',
//         filtersInfo:{},
//         filterData:{},
//         newLocationSearch:false,
//         selectIteminfo:[]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

//     }),

//     reducers:({
//         logininfoAction:(state,action)=>{
//             state.logininfo=action.payload
//         },

//         locationAction:(state,action)=>{
//             state.locationinfo=action.payload
//         },
//         cityAction:(state,action)=>{
//             state.city=action.payload
//         },
//         moreInfoAction:(state,action)=>{
//             state.moreinfo=action.payload
//         },
//         reqFilterAction:(state,action)=>{
//             state.reqFilter=action.payload
//         },
//         filterInfoAction:(state,action)=>{
//             state.filtersInfo=action.payload
//         },
//         filterDataInfoAction:(state,action)=>{
//             state.filterData=action.payload
//         },
//         newLocationSearchAction:(state,action)=>{
//             state.newLocationSearch=action.payload
//         },

//         loginUserInfoAction:(state,action)=>{
//             state.loginuserinfo=action.payload
//         },
//         selectItemInfoAction:(state,action)=>{
//             state.selectIteminfo=action.payload
//         }
//     }),


// })

// export const {logininfoAction,locationAction,cityAction,
//     moreInfoAction,reqFilterAction,filterInfoAction,filterDataInfoAction,
//     newLocationSearchAction,loginUserInfoAction,selectItemInfoAction}=Redux_Slice.actions

// export const Selectlogininfo=(store)=>store.redux_store.logininfo
// export const Selectlocationinfo=(store)=>store.redux_store.locationinfo
// export const Selectcityinfo=(store)=>store.redux_store.city
// export const Selectmoreinfo=(store)=>store.redux_store.moreinfo
// export const SelectreqFilter=(store)=>store.redux_store.reqFilter
// export const SelectFilterInfo=(store)=>store.redux_store.filtersInfo
// export const SelectDataFilterInfo=(store)=>store.redux_store.filterData
// export const SelectnewLocationSearch=(store)=>store.redux_store.newLocationSearch
// export const SelectLoginUserInfo=(store)=>store.redux_store.loginuserinfo
// export const SelectedItemInfo=(store)=>store.redux_store.selectIteminfo



// export default Redux_Slice.reducer


// export const StatusFilters = {
//     All: 'all',
//     Active: 'active',
//     Completed: 'completed',
//   }
  
//   const initialState = {
//     status: StatusFilters.All,
//     colors: [],
//   }
  

 const initialState={
    logininfo:'',
    loginuserinfo:'',
    locationinfo:'',
    city:'',
    moreinfo:'',
    reqFilter:'',
    filtersInfo:'',
    filterData:'',
    newLocationSearch:false,
    selectIteminfo:''
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            

}

  export default function actionReducer(state = initialState, action) {
    switch (action.type) {
      case 'cityAction': {
        // console.log(action.payload)
        // console.log('coming')
        return {
          // Again, one less level of nesting to copy
          ...state,
          city: action.payload,
        }
      }

      case 'logininfoAction': {
        // console.log(action.payload)
        return {
          // Again, one less level of nesting to copy
          ...state,
          logininfo: action.payload,
        }
      }
      case 'locationAction': {
        // console.log(action.payload)
        return {
          // Again, one less level of nesting to copy
          ...state,
          locationinfo: action.payload,
        }
      }

      case 'moreInfoAction': {
        // console.log(action.payload)
        return {
          // Again, one less level of nesting to copy
          ...state,
          moreinfo: action.payload,
        }
      }
      case 'reqFilterAction': {
        // console.log(action.payload)
        return {
          // Again, one less level of nesting to copy
          ...state,
          reqFilter: action.payload,
        }
      }

      case 'filterInfoAction': {
        // console.log(action.payload)
        return {
          // Again, one less level of nesting to copy
          ...state,
          filtersInfo: action.payload,
        }
      }
      case 'filterDataInfoAction': {
        // console.log(action.payload)
        return {
          // Again, one less level of nesting to copy
          ...state,
          filterData: action.payload,
        }
      }


      case 'newLocationSearchAction': {
        // console.log(action.payload)
        return {
          // Again, one less level of nesting to copy
          ...state,
          newLocationSearch: action.payload,
        }
      }

      case 'loginUserInfoAction': {
        // console.log(action.payload)
        return {
          // Again, one less level of nesting to copy
          ...state,
          loginuserinfo: action.payload,
        }
      }

      case 'selectItemInfoAction': {
        // console.log(action.payload)
        return {
          // Again, one less level of nesting to copy
          ...state,
          selectIteminfo: action.payload,
        }
      }
      default:
        return state
    }
  }
  



