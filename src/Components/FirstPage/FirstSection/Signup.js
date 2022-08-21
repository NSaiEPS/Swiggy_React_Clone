import React from 'react'
import './Signup.css'

const Signup = () => {
  return (
    <div className='Signup'>
      <div className='Signup_Inside'>

        <div className='Signup_Inside_left'>

        </div>

        <div className='Signup_Inside_right'>
          <div className='Signup_Inside_right_inside'>
              
              <div>

                <button>X</button>
              </div>
              <div >
                <div>Login <br/>
                or <button>create an account</button>

                </div>
                <div>
                  <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r'
                  alt='img'/>
                </div>
              </div>
              <div className='Signup_Inside_right_inside_signup'>
                <input placeholder='Phone number'/>
                <input placeholder='Phone number'/>
                <input placeholder='Phone number'/>
                <input placeholder='Phone number'/>
                <button>Login</button>
              </div>
              <div>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Signup