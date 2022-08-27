import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logininfoAction, Selectlogininfo } from '../../Redux_toolkit/Redux_Slice';
import ClearIcon from '@mui/icons-material/Clear';

import './Signup.css'
import { toast } from 'react-toastify';

const Signup = () => {
  // let signup=false;


  let selectLogininfo=useSelector(Selectlogininfo)
  
  let signupname=selectLogininfo?.name;
  let dispatch=useDispatch()
  let [checkloginbtn,setCheckloginbtn]=useState(false)
  let [otpCondition,setOTPcondition]=useState(false)

  

  // let signup=selectLogininfo?.status;


  let [signup,setSignup]=useState(
    signupname==='signup'? true:false
  )

  let handlebtnclick=()=>{
    // if(otpCondition)
    setSignup(!signup)
    setFocus({
      ...focus,
      referal:false

    })
    setreferlcode(false)


    // console.log(focus.referal)
  }


  let [focus,setFocus]=useState({
    phonenumber:false,
    name:false,
    email:false,
    password:false,
    referal:false,
    otp:false



  })

  let [inputval,setInputVal]=useState({
    phonenumber:'',
    name:'',
    email:'',
    password:'',
    referal:'',
    otp:''
  })

  let [conditionCheck,setConditionCheck]=useState({

    phonenumber:false,
      email:false,
    password:false
  })

  // let [conditionCheck2,setConditionCheck2]=useState({

  //   phonenumber:true,
  //     email:true,
  //     name:true,
  //   password:true
  // })


  let handleinputchange=(e)=>{
    let name=e.target.name
    let val=e.target.value
  //   if (name==='phonenumber'){
  //     console.log('phonenumber',val)
  //     let rv=parseInt(val) 
  //     rv!==NaN &&
  //     setInputVal({
  //       ...inputval,
  //       [name]:val
  //     })
  //   }
  //   else {
  //   setInputVal({
  //     ...inputval,
  //     [name]:val
  //   })
  // }

  setInputVal({
        ...inputval,
        [name]:val
      })

      setConditionCheck({
        ...conditionCheck,
      [name]:true
      })

  }

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
    // if(name===inputval.name){
    //   console.log('name')
    // }
    // phonenumber:'',
    // name:'',
    // email:'',
    // password:'',
    // referal:''
    
    if(name==='phonenumber'){
      // let check=true;
    inputval.phonenumber.length!==10 ?
      setConditionCheck({
        ...conditionCheck,
        phonenumber:false
      })
      :
      setConditionCheck({
        ...conditionCheck,
        phonenumber:true
      })

    }


 if (name==='email'){
  let email=inputval.email;
  let ear=email.split('@')
    // console.log(ear)

  if(ear.length!==2){
    // console.log(ear)
    setConditionCheck({
      ...conditionCheck,
      email:false
    })
  }

  else {
    // console.log(ear)
    let emilcheck=ear[1].split('.')

    if(emilcheck.length===1){
      setConditionCheck({
        ...conditionCheck,
        email:false
      })
    }

    else {

    (['com','org','info','de','ac','in'].includes(emilcheck[1])) ? 
     setConditionCheck({
      ...conditionCheck,
      email:true
    })
    // console.log('true')
    
    :  
    // console.log('false')
    
    setConditionCheck({
      ...conditionCheck,
      email:false
    })
  }}
  //  .com, .org, .info, and .de
 }






    if(name==='password'){
      inputval.password.length<6 ?
      setConditionCheck({
        ...conditionCheck,
        password:false
      }):
      setConditionCheck({
        ...conditionCheck,
        password:true
      })

    }





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


  document.body.style.overflowY = "scroll";

}

// console.log(inputval)

let [passwordShow,setPasswordshow]=useState(false)
let handlePassshow=()=>{
  setPasswordshow(!passwordShow)
}



useEffect(()=>{

  setInputVal({
    ...inputval,
    
    phonenumber:'',
    name:'',
    email:'',
    password:'',
    referal:'',
    otp:''
  })

  // setConditionCheck2({
  //   conditionCheck2,

  //   phonenumber:true,
  //     email:true,
  //     name:true,
  //   password:true
  // })

  // document.body.style.overflow = "scroll";





  // setFocus({
  //   ...focus,
  //   phonenumber:true
  // })

  setCheckloginbtn(false)


},[signup])

// let [scrollbarset,setscrollbarset]=useState(false)

useEffect(()=>{
  // document.body.style.overflow = "hidden";
  if(selectLogininfo.status){
      document.body.style.overflow = "hidden";

  }
 


},[selectLogininfo])

// signupname
// selectLogininfo
// console.log()
// let [conditionCheck2,setConditionCheck2]=useState({

//   phonenumber:true,
//     email:true,
//     name:true,
//   password:true
// })

// let phonenumCheck=()=>{
//   // alert('here phone')

//   if( !inputval.phonenumber || inputval.phonenumber.length<10 ){
//     setConditionCheck2({
//       ...conditionCheck2,
//       phonenumber:false
//     })
//   // console.log('phone ',conditionCheck2.phonenumber)
//   }
//     else{
    
//     setConditionCheck2({
//       ...conditionCheck2,
//       phonenumber:true
//     })
  
//     // console.log('phone true')
//   }

// }

// let nameCheck=()=>{
//   // alert('here name')
//     if(inputval.name.length<1){

//   setConditionCheck2({
//     ...conditionCheck2,
//     name:false
//   })}
//   else{
//   setConditionCheck2({
//     ...conditionCheck2,
//     name:true
//   })}
// }

let handlesubmit=()=>{
 
  // phonenumCheck()
  // nameCheck()
  setCheckloginbtn(true)

//  signup?( (conditionCheck.email&& conditionCheck.password && conditionCheck.phonenumber && inputval.name.length>0 )?
//     alert('condition  satisfied'):
//     alert('condition not satisfied!')):
//    ( ( conditionCheck.phonenumber )?
//     alert('condition not satisfied!'):
//     alert('condition  satisfied'))
    


  if(signup){
   
  if((conditionCheck.email&& conditionCheck.password && conditionCheck.phonenumber && inputval.name.length>0 )){
    toast.success(`OTP sent to the ${inputval.phonenumber}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      // pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })

      setOTPcondition(true)

  }
  else {
    alert('condition not satisfied')
    setOTPcondition(false)
  }
  }
  else{
    if(( conditionCheck.phonenumber )){
      toast.success(`OTP sent to the ${inputval.phonenumber}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        // pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })
      setOTPcondition(true)

  
    }
    else {
      alert('condition not satisfied')
    setOTPcondition(false)

    }
  }


  


// if (name==='email'){
// let email=inputval.email;
// let ear=email.split('@')
//   // console.log(ear)

// if(ear.length!==2){
//   // console.log(ear)
//   setConditionCheck2({
//     ...conditionCheck2,
//     email:false
//   })
// }

// else {
//   // console.log(ear)
//   let emilcheck=ear[1].split('.')

//   if(emilcheck.length!==2){
//     setConditionCheck2({
//       ...conditionCheck2,
//       email:false
//     })
//   }

//   else {

//   (['com','org','info','de'].includes(emilcheck[1])) ? 
//    setConditionCheck2({
//     ...conditionCheck2,
//     email:true
//   })
//   // console.log('true')
  
//   :  
//   // console.log('false')
  
//   setConditionCheck2({
//     ...conditionCheck2,
//     email:false
//   })
// }}
// //  .com, .org, .info, and .de
// // }






//   // if(name==='password'){
//    if (inputval.password.length<6){
//     setConditionCheck2({
//       ...conditionCheck2,
//       password:false
//     })}
//     else {
//     setConditionCheck2({
//       ...conditionCheck2,
//       password:true
//     })
//   }
//   // }

//   if(inputval.name.length<1){

//   setConditionCheck2({
//     ...conditionCheck2,
//     name:false
//   })}
//   else{
//   setConditionCheck2({
//     ...conditionCheck2,
//     name:true
//   })}
// console.log(conditionCheck2)






// if( !inputval.password || inputval.password.length<6 ){
//   setConditionCheck2({
//     ...conditionCheck2,
//     password:false
//   })
// console.log('password ',conditionCheck2.password)
// }
//   else{
  
//   setConditionCheck2({
//     ...conditionCheck2,
//     password:true
//   })

//   console.log('pass true')
// }


}
// console.log(conditionCheck2)



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
                
                >X
    {/* <ClearIcon /> */}
                
                </button>
              </div>


              <div >
                <div> 
                  <div> <h2>
                    {signup ? 'Sign up':'Login'}
                    
                    </h2></div>
                  <div> or <button onClick={handlebtnclick}
                  >{
                  signup? 'login to your account':'create an account'}
                    
                    </button></div>
                  
                  
                 
               

                </div>
                <div>
                  <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r'
                  alt='img'/>
                </div>
              </div>
              <div className='Signup_Inside_right_inside_signup'>
                <form>
                
               <div>
               <div className='Signup_input_div  Signup_input_div_input_phone'>
                <input placeholder='' name='phonenumber' type="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" minLength={10} maxLength={10}
                onFocus={handlefocus} onBlur={handleblur}
                onChange={handleinputchange} value={inputval.phonenumber}
                autoFocus
                />
                {checkloginbtn && !inputval.phonenumber ? 
                <span className='invalidshowdown'
               
                >Enter your phone number</span>
                
                
                :

                  (inputval.phonenumber && !conditionCheck.phonenumber) ?
                
                 
                 <span className='invalidshow'
               
                 >Enter your phone number</span>
                 :
                 <span className={focus.phonenumber || inputval.phonenumber? 'Signup_input_divspanup':
                
                 'Signup_input_divspan'}
               
                 >Phone number</span>

                 
                 
                 }


               
                
                </div>


{/* OTP Condition */}

               {otpCondition?

<div className='Signup_input_div  Signup_input_div_input_phone'>
                <input placeholder='' name='otp' type="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" minLength={10} maxLength={10}
                onFocus={handlefocus} onBlur={handleblur}
                onChange={handleinputchange} value={inputval.otp}
                autoFocus
                />

<span className={focus.name || inputval.name ? 'Signup_input_divspanup':'Signup_input_divspan'}
                
                >OTP</span>

                {/* {checkloginbtn && !inputval.phonenumber ? 
                <span className='invalidshowdown'
               
                >Enter your phone number</span>
                
                
                :

                  (inputval.phonenumber && !conditionCheck.phonenumber) ?
                
                 
                 <span className='invalidshow'
               
                 >Enter your phone number</span>
                 :
                 <span className={focus.phonenumber || inputval.phonenumber? 'Signup_input_divspanup':
                
                 'Signup_input_divspan'}
               
                 >Phone number</span>

                 
                 
                 } */}


               
                
                </div>

:
               
              




                (signup && <>
                  <div className='Signup_input_div'>
                <input placeholder='' name='name' type='text'
                onFocus={handlefocus} onBlur={handleblur}
                onChange={handleinputchange} value={inputval.name}
                />
{checkloginbtn && inputval.name<1 ?
  <span className='invalidshowdown'
               
  >name must be greater than 1 char</span>:

                <span className={focus.name || inputval.name ? 'Signup_input_divspanup':'Signup_input_divspan'}
                
                >Names</span>
                
                }
                </div>

                <div className='Signup_input_div'>
                <input placeholder='' name='email' type='email'
                onFocus={handlefocus}  onBlur={handleblur}
                onChange={handleinputchange} value={inputval.email}
                 />
                

                {checkloginbtn && !inputval.email ? 
                <span className='invalidshowdown'
               
                >invalid email address</span>
                
                
                :

                   (inputval.email && !conditionCheck.email) ?
                
                 
                <span className='invalidshow'
              
                >invalid email address</span>:

                <span className={focus.email || inputval.email? 'Signup_input_divspanup':'Signup_input_divspan'}
 
                >Email</span>}



                </div>

                <div className='Signup_input_div '>
                <input placeholder='' name='password'
                 type={passwordShow ? 'text':'password'}
                onFocus={handlefocus} onBlur={handleblur}
                onChange={handleinputchange} value={inputval.password} minLength={6}
                 />



{checkloginbtn && !inputval.password ? 
                <span className='invalidshowdown'
               
                >Password should be min 6 chars</span>:

 (inputval.password && !conditionCheck.password) ?
                
                 
                <span className='invalidshow'
              
                >Password should be min 6 chars</span>:


                <span className={focus.password || inputval.password ? 'Signup_input_divspanup':'Signup_input_divspan'}
   
                >Password</span>}



            {inputval.password &&     <span className='Signup_input_divspanpasswordshow'
            onClick={handlePassshow}
            >
            {!passwordShow ? 'show':'hide'}  </span>}

                
                </div>
                
                {!referalcode ?
                <div  className='referalspan'>
                <span onClick={referralclick}
               
                // style={{marginTop:'15px'}}
                
                >Have a referral code?</span></div>:

                <div className='Signup_input_div'>
                <input placeholder='' name='referal' 
                onFocus={handlefocus} onBlur={handleblur} 
                onChange={handleinputchange} value={inputval.referal}
                />
                <span className={focus.referal || inputval.referal? 'Signup_input_divspanup':'Signup_input_divspan'}
   
                >Referral code</span>

                
                </div>
                }
                

                
                </>)}
                </div>
                <div 
                onClick={handlesubmit}
                className='Signup_btn_Submit'
                >
             
                {signup ? 
                'CONTINUE'
                :
                'LOGIN'}
                {/* <button>{signup ? 'CONTINUE':'LOGIN'}</button> */}
              
              
                </div>
                </form>
              
              </div>
              <div> {signup? 'By creating an account':'By clicking on Login'} , I accept the <b>Terms & Conditions</b> & <b>Privacy Policy </b></div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Signup