import React from 'react'
import './Header1.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SupportIcon from '@mui/icons-material/Support';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useDispatch } from 'react-redux';
import { logininfoAction } from '../../Redux_toolkit/Redux_Slice';


const Header1 = () => {
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
    <div className='Header1'>

      <div className='Header1_inside'>
        <div className='Header1_inside_left'>

          <img  src='https://anujbansal16.github.io/images/logos/swiggy.svg'
          alt='swiggy.png'/>
          
           <span>Location</span>
           </div>
        <div className='Header1_inside_right'>

           <div className='Header1_inside_right_divs'>
            <span>
            <SearchRoundedIcon/>
            </span>
           
            <span>Search</span>
            </div>
{/* 
<img src="data:image/png;base64,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"
             
              // alt='offerimg'/> */}

           <div className=' Header1_inside_right_divs '>
            <span>
            <LocalOfferIcon/>
            </span>
            <span>Offers</span>
           </div>

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

export default Header1