import React from 'react'
import './Header1.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SupportIcon from '@mui/icons-material/Support';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useDispatch } from 'react-redux';
import { logininfoAction, moreInfoAction } from '../../Redux_toolkit/Redux_Slice';
import { Link } from 'react-router-dom';



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

  let handleDispatchcity=(city)=>{
    dispatch(moreInfoAction(
      city
    ))

    window.scrollTo(0,0)


  }

  return (
    <div className='Header1'>

      <div className='Header1_inside'>
        <div className='Header1_inside_left'>
           <Link to='/'>
          <img  src='https://anujbansal16.github.io/images/logos/swiggy.svg'
          alt='swiggy.png'/>
          </Link>
           <span>Location</span>
           </div>
        <div className='Header1_inside_right'>

           <div className='Header1_inside_right_divs'>
            <span>
            <SearchRoundedIcon/>
            </span>
           
            <span>Search</span>
            </div>


           <div className=' Header1_inside_right_divs '>
            <span>
            <LocalOfferIcon/>
            </span>
            <span>Offers</span>
           </div>
           
           <Link to='/support'>
           <div onClick={()=>handleDispatchcity('support')}
           className='Header1_inside_right_divs Header1_inside_right_divs_small'>
            
            <span><SupportIcon/></span>
            <span>Help</span>

            {/*  <Link to='support'>
            <span><SupportIcon/></span>
            <span>Help</span>
            </Link> */}
           </div>
           </Link> 
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