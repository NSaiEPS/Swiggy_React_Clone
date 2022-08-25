import React from 'react'
import { useDispatch } from 'react-redux'
import { logininfoAction } from '../../../Redux_toolkit/Redux_Slice'
import SupportIcon from '@mui/icons-material/Support';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './CityHeader.css'
import { Link } from 'react-router-dom';

const CityHeader = () => {

  let dispatch=useDispatch()
 
  let handleSignin=()=>{
    dispatch(
      logininfoAction(
        {name:'login',
         status:true,
      }
      )
    )

  }
  return (
    <div className='CityHeader'>
      
      <div className='CityHeader_inside'>
      <div className='CityHeader_inside_left'>
        <Link to='/'>
        <img src='https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png'
        alt='swiigy.img'
       
        />
        </Link>
      </div>

      <div className='CityHeader_inside_right'>
      <Link to='/support' >
      <div className='Header1_inside_right_divs Header1_inside_right_divs_small CityHeader_inside_right_help'>
            <span><SupportIcon/></span>
            <span>
         
            Help
              </span>
           </div>
           </Link>

           <div className='Header1_inside_right_divs'
           onClick={handleSignin}
           >
            <span><PersonOutlineIcon/></span>
            <span>Sign In</span>
           </div>
           <Link to='support'>

           <div className='Header1_inside_right_divs Header1_inside_right_divs_small'>
            <span>
              <AddShoppingCartIcon/>
            </span>
            <span>Cart</span>
           </div>
           </Link>
      </div>
      </div>
    </div>
  )
}

export default CityHeader
