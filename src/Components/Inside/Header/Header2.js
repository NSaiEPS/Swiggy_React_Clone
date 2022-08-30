import React from 'react'
import { Link } from 'react-router-dom';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import './Header2.css'

const Header2 = ({show}) => {
  let num=10;
  return (
    <div className='Header2'>
      <div className='Header2_inside'>
        <div className='Header2_inside_left'>
          <h2>{num} restaurants</h2>
        </div>

        <div className='Header2_inside_right'>
          <Link to='/search'
          className='Header2_inside_right_searchLink'
          >
          <span
          className={!show && 'Header2_inside_right_search'}
          
          >
         <SearchRoundedIcon
         className='Header2_inside_right_searchIcon'
         />

            
            Search</span>
          </Link>
          <span>Relevance</span>
          <span>Delivery Time</span>
          <span>Rating</span>
          <span>Cost: Low To High</span>
          <span>Cost: High To Low</span>
          <span>Filters</span>
        </div>
      </div>
    </div>
  )
}

export default Header2