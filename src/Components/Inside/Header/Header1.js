import React, { useEffect, useState } from 'react'
import './Header1.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SupportIcon from '@mui/icons-material/Support';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useDispatch, useSelector } from 'react-redux';
import { logininfoAction, moreInfoAction, newLocationSearchAction, Selectlocationinfo, SelectLoginUserInfo } from '../../Redux_toolkit/Redux_Slice';
import { Link } from 'react-router-dom';
import { auth, db } from '../../../Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import MoreVertIcon from '@mui/icons-material/MoreVert';

const Header1 = () => {
  let dispatch=useDispatch()
  let selectLocationInfo=useSelector(Selectlocationinfo)
const [userss,loading]=useAuthState(auth)
let selectLoginUserInfo=useSelector(SelectLoginUserInfo)

let [cartItems,setCartItems]=useState([])

let getCartData=()=>{
  db.collection('user').doc((selectLoginUserInfo.id)).collection('cart').onSnapshot((data)=>{
    setCartItems((data.docs.map((item)=>({
      id:item.id,
data:item.data()



    }))))
  })
}
useEffect(()=>{
  getCartData()
  // alert(cartItems.length)

},[])

// useEffect(()=>{
//   localStorage.setItem('Swiggy_Clone_Cart_Lenght',JSON.stringify(cartItems.length))

// },[cartItems])


let locationEntered=(JSON.parse(localStorage.getItem('Swiggy_Clone_location')))
 
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
let path=(window.location.pathname.split('/'))


let handleEraceLocation=()=>{
  localStorage.clear('Swiggy_Clone_location')
  window.location.reload()
}

let handleNewSearch=()=>{
  
  document.body.style.overflowY = "hidden";

  dispatch(newLocationSearchAction(true))

}

let [moreOption,setMoreOption]=useState(false)

let handlemoreOption=()=>{
  setMoreOption(!moreOption)

}

let handleBlurMoreOption=()=>{
  setMoreOption(false)

}

  return (
    <div className='Header1'>
      
{selectLoginUserInfo?.name &&
      <button
      className='Header1_showingName'
      > {selectLoginUserInfo?.name}</button>}


      <div className='Header1_inside'>
        <div className='Header1_inside_left'>
           <Link to='/'
           onClick={()=>{
    window.scrollTo(0,0)
            
           }}
           
           >
          <img  src='https://anujbansal16.github.io/images/logos/swiggy.svg'
          alt='swiggy.png'/>
          </Link>

           <span>{path[1]==='support'? 'HELP': 
           <b
           onClick={handleNewSearch}
           > 
            {locationEntered} </b>
           }</span>

          <span className='Header1_clear_location' 
          onClick={handleEraceLocation}>X
          
          <small className='Header1_clear_location_indicator'
          >Clear the location {locationEntered}</small>
          </span>

           {userss?.phoneNumber==='+919705442192'
           
           &&
           
           
            <button
            className='Header1_inside_left_dasboard'
            >
              <Link to='/dashboard'
              className='Header1_inside_left_dasboard_link'
              >
              DashBoard


              </Link>
              </button>
              
              }

           </div>
        <div className='Header1_inside_right'>
        <Link to='/search'
        
        onClick={()=>{
          window.scrollTo(0,0)
                  
                 }}
                 
        >
        
           <div className='Header1_inside_right_divs'
           
           style= { {
            color:path.includes('search') &&'#FC8019',
            pointerEvents:'none'
           }
          
          }
           
           >
            <span>
            <SearchRoundedIcon/>
            </span>
           
            <span>Search</span>
            </div>
            </Link>

            <Link to='/offers'>

           <div className=' Header1_inside_right_divs '
             style= { {
            color:path.includes('offers') &&'#FC8019',
            position:'relative'
           }}
           >
            <span>
            <LocalOfferIcon/>
            </span>
            <span>Offers</span>
           
           
           {!path.includes('offers') && <span
            className='Header1_inside_right_divs_offernew'
            >NEW</span>} 
           </div>
           </Link>
           
           <Link to='/support'>
           <div onClick={()=>handleDispatchcity('support')}
           className='Header1_inside_right_divs Header1_inside_right_divs_small'
           style= { {
            color:path.includes('support') &&'#FC8019'
           }}
           >
            
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
           <Link to='/cart'>

           <div className='Header1_inside_right_divs Header1_inside_right_divs_small Header1_inside_right_divs_cart'>
            <span>
              <AddShoppingCartIcon/>
            </span>
            <span>Cart</span>
            {cartItems.length>0 &&
            <span
            className='Header_inside_show_number'
            
            >{cartItems.length}</span>}
           </div>
           </Link>
        </div>





{/* For Responsive */}


        <div className='Header_inside_right_for_Responsive'
        onBlur={handleBlurMoreOption}
        >
        <MoreVertIcon
        className='Header_inside_moreOptions_icon'
        onClick={handlemoreOption}
        />
       {moreOption &&
       <div className='Header_inside_right_for_Responsive_moreoptions'>
       {/* <div className='Header1_inside_right'> */}
        <Link to='/search'
        
        onClick={()=>{
          window.scrollTo(0,0)
                  
                 }}
                 
        >
        
           <div className='Header1_inside_right_divs'
           
           style= { {
            color:path.includes('search') &&'#FC8019',
            pointerEvents:'none'
           }
          
          }
           
           >
            <span>
            <SearchRoundedIcon/>
            </span>
           
            <span>Search</span>
            </div>
            </Link>

            <Link to='/offers'>

           <div className=' Header1_inside_right_divs '
             style= { {
            color:path.includes('offers') &&'#FC8019',
            position:'relative'
           }}
           >
            <span>
            <LocalOfferIcon/>
            </span>
            <span>Offers</span>
           
           
           {!path.includes('offers') && <span
            className='Header1_inside_right_divs_offernew'
            >NEW</span>} 
           </div>
           </Link>
           
           <Link to='/support'>
           <div onClick={()=>handleDispatchcity('support')}
           className='Header1_inside_right_divs Header1_inside_right_divs_small'
           style= { {
            color:path.includes('support') &&'#FC8019'
           }}
           >
            
            <span><SupportIcon/></span>
            <span>Help</span>

           

           
           </div>
           </Link> 
           <div className='Header1_inside_right_divs'
           onClick={handleSignin}
           >
            <span><PersonOutlineIcon/></span>
            <span>Sign In</span>
           </div>
           <Link to='/cart'>

           <div className='Header1_inside_right_divs Header1_inside_right_divs_small Header1_inside_right_divs_cart'>
            <span>
              <AddShoppingCartIcon/>
            </span>
            <span>Cart</span>
            {cartItems.length>0 &&
            <span
            className='Header_inside_show_number'
            
            >{cartItems.length}</span>}
           </div>
           </Link>
        {/* </div> */}
       </div>}
       
        </div>

      </div>
    </div>
  )
}

export default Header1