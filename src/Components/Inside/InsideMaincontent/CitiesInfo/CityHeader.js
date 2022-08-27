import React, { useEffect, useState } from 'react'
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

  let onClickhelp=()=>{
    window.scrollTo(0,0)
  }

  let path=window.location.pathname.split('/')
  let [cityfinder,setCityfinder]=useState(true)
  // console.log(path)
  // let disname=''
let [disname,setDisname]=useState('')
  useEffect(()=>{

  if(path.includes('city')){
    setCityfinder(true)
  }

  else {
    setCityfinder(false)

    if(path[1]==='support'){
      setDisname("HELP")
      // disname="HELP"
    }
    if(path[1]==='cart'){
      setDisname("SECURE CHECKOUT")

      // disname="SECURE CHECKOUT"

    }


  }
},[])

  return (
    <div className='CityHeader'>
      
      <div className='CityHeader_inside'>
      <div className='CityHeader_inside_left'>
        <Link to='/'>

          {cityfinder ?
            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png'
            alt='swiigy.img'
           
            />: 
            
            
<img  src='https://anujbansal16.github.io/images/logos/swiggy.svg'
          alt='swiggy.png'
          className='CityHeader_inside_left_img_new'
          />
            }
      

        </Link>

        {!cityfinder && <span 
        className='CityHeader_inside_left_nameindicate'
        >
          {/* {path[1].toUpperCase()} */}
          {disname}
        </span>}
      </div>

      <div className='CityHeader_inside_right'>
      <Link to='/support' 
      onClick={onClickhelp}
      >
      <div className='Header1_inside_right_divs Header1_inside_right_divs_small CityHeader_inside_right_help'
       style={{
        color: path[1]==='support' && '#FC8019'
       }}
      >
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

           {path[1]!=='cart' &&
           <Link to='/cart'>

           <div className='Header1_inside_right_divs Header1_inside_right_divs_small'>
            <span>
              <AddShoppingCartIcon/>
            </span>
            <span>Cart</span>
           </div>
           </Link>}
      </div>
      </div>
    </div>
  )
}

export default CityHeader
