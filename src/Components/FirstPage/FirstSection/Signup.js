import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logininfoAction, Selectlogininfo } from '../../Redux_toolkit/Redux_Slice';
import './Signup.css'

const Signup = () => {
  // let signup=false;


  let selectLogininfo=useSelector(Selectlogininfo)
  
  let signupname=selectLogininfo?.name;
  let dispatch=useDispatch()

  

  // let signup=selectLogininfo?.status;


  let [signup,setSignup]=useState(
    signupname==='signup'? true:false
  )

  let handlebtnclick=()=>{
    setSignup(!signup)
    setFocus({
      ...focus,
      referal:false

    })
    setreferlcode(false)


    console.log(focus.referal)
  }


  let [focus,setFocus]=useState({
    phonenumber:false,
    name:false,
    email:false,
    password:false,
    referal:false



  })

  let handlefocus=(e)=>{
    // console.log(e.target.name)
    let name=e.target.name;

    setFocus({
      ...focus,
      [name]:true
    })

  }

  // console.log(focus)

  let handleblur=(e)=>{
    let name=e.target.name;

    setFocus({
      ...focus,
      [name]:false
    })

  }


  let [referalcode,setreferlcode]=useState(false)

  let referralclick=()=>{
    setreferlcode(true)


  }

let handleerasesignup=()=>{
  dispatch(
    logininfoAction(
      {name:'',
       status:false,
    }
    )
  )
}

  return (
    <div className='Signup'>
      <div className='Signup_Inside'>

        <div  onClick={handleerasesignup}
        className='Signup_Inside_left'>

        </div>

        <div className='Signup_Inside_right'>
          <div className='Signup_Inside_right_inside'>
              
              <div>

                <button
                onClick={handleerasesignup}
                
                >X</button>
              </div>
              <div >
                <div> 
                  <div> <h2>
                    {signup ? 'Sign up':'Login'}
                    
                    </h2></div>
                  <div> or <button onClick={handlebtnclick}
                  >{signup? 'login to your account':'create an account'}
                    
                    </button></div>
                  
                  
                 
               

                </div>
                <div>
                  <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r'
                  alt='img'/>
                </div>
              </div>
              <div className='Signup_Inside_right_inside_signup'>
               <div>
               <div className='Signup_input_div'>
                <input placeholder='' name='phonenumber'
                onFocus={handlefocus} onBlur={handleblur}/>

                <span className={focus.phonenumber? 'Signup_input_divspanup':'Signup_input_divspan'}
              
                >Phone number</span>
                </div>

                {signup && <>
                  <div className='Signup_input_div'>
                <input placeholder='' name='name'
                onFocus={handlefocus} onBlur={handleblur}/>

                <span className={focus.name? 'Signup_input_divspanup':'Signup_input_divspan'}
                
                >Name</span>
                </div>

                <div className='Signup_input_div'>
                <input placeholder='' name='email'
                onFocus={handlefocus}  onBlur={handleblur} />
                
                <span className={focus.email? 'Signup_input_divspanup':'Signup_input_divspan'}
 
                >Email</span>
                </div>

                <div className='Signup_input_div '>
                <input placeholder='' name='password' 
                onFocus={handlefocus} onBlur={handleblur} />
                <span className={focus.password? 'Signup_input_divspanup':'Signup_input_divspan'}
   
                >Password</span>

                
                </div>
                {!referalcode ?
                <div  className='referalspan'>
                <span onClick={referralclick}
               
                // style={{marginTop:'15px'}}
                
                >Have a referral code?</span></div>:

                <div className='Signup_input_div'>
                <input placeholder='' name='referal' 
                onFocus={handlefocus} onBlur={handleblur} />
                <span className={focus.referal? 'Signup_input_divspanup':'Signup_input_divspan'}
   
                >Referral code</span>

                
                </div>
                }
                

                
                </>}
                </div>
                <div>
             
                {signup ? 'CONTINUE':'LOGIN'}
                {/* <button>{signup ? 'CONTINUE':'LOGIN'}</button> */}
              
              
                </div>
              
              </div>
              <div> {signup? 'By creating an account':'By clicking on Login'} , I accept the <b>Terms & Conditions</b> & <b>Privacy Policy </b></div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Signup