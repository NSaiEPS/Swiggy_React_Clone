import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import './Header2.css'
import { filterInfoAction, reqFilterAction, SelectreqFilter } from '../../Redux_toolkit/Redux_Slice';
import { useDispatch, useSelector } from 'react-redux';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Header2 = ({show,lenght}) => {
  let selectReqFilter=useSelector(SelectreqFilter)
  // console.log(selectReqFilter)

  let dispatch=useDispatch()
  // reqFilterAction
  // let num=10;
  let handleFilters=(req)=>
{dispatch(reqFilterAction(req))
}
  

  // useEffect(()=>{
  //   dispatch(reqFilterAction(''))

  // },[])


  let handleFiltersPageClick=()=>{
    dispatch(filterInfoAction({
      active:true
    }))
  }

  let [moreOptions,setMoreOptions]=useState(false)

let handleMoreOptions=()=>{
  setMoreOptions(!moreOptions)

}


// let handleblur=()=>{
//   setMoreOptions(false)

// }
  return (
    <div className='Header2'>
      <div className='Header2_inside'>
        <div className='Header2_inside_left'>
          <h2>{lenght} restaurants</h2>
        </div>

        <div className='Header2_inside_right'>
          <Link to='/search'
          className='Header2_inside_right_searchLink'

          onClick={()=>{
            window.scrollTo(0,0)
                    
                   }}
                   
          >
          <span
          className={!show ? 'Header2_inside_right_search': undefined}
          
          >
         <SearchRoundedIcon
         className='Header2_inside_right_searchIcon'
         />

            
            
Search</span>
          </Link>
          <span
          className= {selectReqFilter==='' ?  'Header2_inside_right_span' : undefined}

          onClick={()=>handleFilters('')}
         
          >Relevance</span>


          <span

className= {selectReqFilter==='deliveryTime' ?  'Header2_inside_right_span':undefined}

          onClick={()=>handleFilters('deliveryTime')}
          
          >Delivery Time</span>



          <span
className= {selectReqFilter==='rating' ?  'Header2_inside_right_span': undefined}

          onClick={()=>handleFilters('rating')}
          
          
          >Rating</span>



          <span
className= {selectReqFilter==='costLowtoHign' ?  'Header2_inside_right_span' : undefined}  
          onClick={()=>handleFilters('costLowtoHign')}
          >Cost: Low To High</span>



          <span
className= {selectReqFilter==='costHightoLow' ? 'Header2_inside_right_span' :undefined}

          onClick={()=>handleFilters('costHightoLow')}

          
          >Cost: High To Low</span>
          <span
          onClick={handleFiltersPageClick}
    
          >
            
            Filters
            
            <FilterAltIcon
            className='Header2_inside_right_searchIcon'
            style={{color:'#db7c38 '}}
            />
            </span>
        </div>


      <div className='Header2_inside_moreOptions_Responsive'
      // onBlur={handleblur}
      >
      <MoreVertIcon
      className='Header2_inside_moreOptions_Responsive_icon'
      onClick={
        handleMoreOptions
      }/>

{
  moreOptions &&

      <div className='Header2_inside_moreOptions_Responsive_options'>


          <Link to='/search'
          className='Header2_inside_right_searchLink'

          onClick={()=>{
            window.scrollTo(0,0)
                    
                   }}
                   
          >
          <span
          className={!show ? 'Header2_inside_right_search': undefined}
          
          >
         <SearchRoundedIcon
         className='Header2_inside_right_searchIcon'
         />

            
            
Search</span>
          </Link>
          <span
          className= {selectReqFilter==='' ?  'Header2_inside_right_span' : undefined}

          onClick={()=>handleFilters('')}
         
          >Relevance</span>


          <span

className= {selectReqFilter==='deliveryTime' ?  'Header2_inside_right_span':undefined}

          onClick={()=>handleFilters('deliveryTime')}
          
          >Delivery Time</span>



          <span
className= {selectReqFilter==='rating' ?  'Header2_inside_right_span': undefined}

          onClick={()=>handleFilters('rating')}
          
          
          >Rating</span>



          <span
className= {selectReqFilter==='costLowtoHign' ?  'Header2_inside_right_span' : undefined}  
          onClick={()=>handleFilters('costLowtoHign')}
          >Cost: Low To High</span>



          <span
className= {selectReqFilter==='costHightoLow' ? 'Header2_inside_right_span' :undefined}

          onClick={()=>handleFilters('costHightoLow')}

          
          >Cost: High To Low</span>
          <span
          onClick={handleFiltersPageClick}
    
          >
            
            Filters
            
            <FilterAltIcon
            className='Header2_inside_right_searchIcon'
            style={{color:'#db7c38 '}}
            />
            </span>
        

      </div>}

      </div>


      </div>
    </div>
  )
}

export default Header2