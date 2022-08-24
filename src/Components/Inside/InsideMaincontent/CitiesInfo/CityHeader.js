import React from 'react'
import { useDispatch } from 'react-redux'
import { logininfoAction } from '../../../Redux_toolkit/Redux_Slice'
import SupportIcon from '@mui/icons-material/Support';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './CityHeader.css'

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
        
        <img src='https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png'
        alt='swiigy.img'/>
      </div>

      <div className='CityHeader_inside_right'>
        
      <div className='Header1_inside_right_divs Header1_inside_right_divs_small'>
            <span><SupportIcon/></span>
            <span>Help</span>
           </div>

           <div className='Header1_inside_right_divs'
           onClick={handleSignin}
           >
            <span><PersonOutlineIcon/></span>
            <span>Sign In</span>
           </div>

           <div className='Header1_inside_right_divs Header1_inside_right_divs_small'>
            <span>
              <AddShoppingCartIcon/>
            </span>
            <span>Cart</span>
           </div>
      </div>
      </div>
    </div>
  )
}

export default CityHeader
