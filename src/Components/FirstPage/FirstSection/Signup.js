import React, { useEffect, useState } from 'react'
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

  let [inputval,setInputVal]=useState({
    phonenumber:'',
    name:'',
    email:'',
    password:'',
    referal:''
  })

  let [conditionCheck,setConditionCheck]=useState({

    phonenumber:true,
      email:true,
    password:true
  })

  let [conditionCheck2,setConditionCheck2]=useState({

    phonenumber:true,
      email:true,
      name:true,
    password:true
  })


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
    inputval.phonenumber.length<10 ?
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

    if(emilcheck.length!==2){
      setConditionCheck({
        ...conditionCheck,
        email:false
      })
    }

    else {

    (['com','org','info','de'].includes(emilcheck[1])) ? 
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
    referal:''
  })



  // setFocus({
  //   ...focus,
  //   phonenumber:true
  // })



},[signup])


// let [conditionCheck2,setConditionCheck2]=useState({

//   phonenumber:true,
//     email:true,
//     name:true,
//   password:true
// })

let handlesubmit=()=>{
  // if(name==='phonenumber'){
    // let check=true;
  inputval.phonenumber.length<10 ?
    setConditionCheck2({
      ...conditionCheck2,
      phonenumber:false
    })
    :
    setConditionCheck2({
      ...conditionCheck2,
      phonenumber:true
    })

  // }


// if (name==='email'){
let email=inputval.email;
let ear=email.split('@')
  // console.log(ear)

if(ear.length!==2){
  // console.log(ear)
  setConditionCheck2({
    ...conditionCheck2,
    email:false
  })
}

else {
  // console.log(ear)
  let emilcheck=ear[1].split('.')

  if(emilcheck.length!==2){
    setConditionCheck2({
      ...conditionCheck2,
      email:false
    })
  }

  else {

  (['com','org','info','de'].includes(emilcheck[1])) ? 
   setConditionCheck2({
    ...conditionCheck2,
    email:true
  })
  // console.log('true')
  
  :  
  // console.log('false')
  
  setConditionCheck2({
    ...conditionCheck2,
    email:false
  })
}}
//  .com, .org, .info, and .de
// }






  // if(name==='password'){
    inputval.password.length<6 ?
    setConditionCheck2({
      ...conditionCheck2,
      password:false
    }):
    setConditionCheck2({
      ...conditionCheck2,
      password:true
    })

  // }

  inputval.name.length<1 ?

  setConditionCheck2({
    ...conditionCheck2,
    name:false
  }):
  setConditionCheck2({
    ...conditionCheck2,
    name:true
  })
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
               <div className='Signup_input_div  Signup_input_div_input_phone'>
                <input placeholder='' name='phonenumber' type="number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" minLength={10} maxLength={10}
                onFocus={handlefocus} onBlur={handleblur}
                onChange={handleinputchange} value={inputval.phonenumber}
                autoFocus
                />

                {  (inputval.phonenumber && !conditionCheck.phonenumber) ?
                
                 
                 <span className='invalidshow'
               
                 >Enter your phone number</span>
                 :
                 <span className={focus.phonenumber || inputval.phonenumber? 'Signup_input_divspanup':
                
                 'Signup_input_divspan'}
               
                 >Phone number</span>

                 
                 }

               
                
                </div>

                {signup && <>
                  <div className='Signup_input_div'>
                <input placeholder='' name='name' type='text'
                onFocus={handlefocus} onBlur={handleblur}
                onChange={handleinputchange} value={inputval.name}
                />

                <span className={focus.name || inputval.name ? 'Signup_input_divspanup':'Signup_input_divspan'}
                
                >Name</span>
                </div>

                <div className='Signup_input_div'>
                <input placeholder='' name='email' type='email'
                onFocus={handlefocus}  onBlur={handleblur}
                onChange={handleinputchange} value={inputval.email}
                 />
                
                {  (inputval.email && !conditionCheck.email) ?
                
                 
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


{  (inputval.password && !conditionCheck.password) ?
                
                 
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
                

                
                </>}
                </div>
                <div 
                onClick={handlesubmit}
                >
             
                {signup ? 
                'CONTINUE'
                :
                'LOGIN'}
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