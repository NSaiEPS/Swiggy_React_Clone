import React from 'react'
import { useDispatch } from 'react-redux'
import { LocationCities } from '../../../LocationCities'
import { logininfoAction } from '../../Redux_toolkit/Redux_Slice'
import './Locationentering.css'
// import MyLocationTwoToneIcon from '@mui/icons-material/MyLocationTwoTone';
const Locationentering = () => {
  let dispatch=useDispatch()
 
  let handleLogin=()=>{
    dispatch(
      logininfoAction(
        {name:'login',
         status:true,
      }
      )
    )

  }

  let handleSignup=()=>{

    dispatch(
      logininfoAction(
        {name:'signup',
         status:true,
      }
      )
    )

  }
  return (
    <div className='Locationentering'>
      <div className='Locationentering_inside'>
      <div className='Locationentering_inside_top'>
        <div>

        <img src='https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png' alt='Swiggyimg'/>
        </div>
       <div>
        <button className='Locationentering_inside_top_loginbtn'
        
        onClick={handleLogin}>Login</button>

        <button onClick={handleSignup}
         className='Locationentering_inside_top_signupbtn'>Sign up</button></div>




      </div>
      <div className='Locationentering_inside_Changing'>
        <h1> Changing ?</h1>
      </div>
      <div className='Locationentering_inside_info'>
        <span>Order food from favourite restaurants near you.
          </span>
        </div>
      
      <div className='Locationentering_inside_input'>
        
        <div>
          <input placeholder='Enter your delivery location' />
          <span className='Locationentering_inside_inputLocation'>Locate Me</span>
        </div>
        <div>
          <button>Find food</button>
          </div>

      </div>

      <div>Popular cities in India</div>
      
      <div className='Locationentering_inside_cities'>
        {LocationCities.Popular?.map((cities,indx)=>{
          return(
            <div key={indx}>
              {cities}
              </div>
          )
        })}
        & more
        
      </div>
      </div>
      </div>
  )
}

export default Locationentering