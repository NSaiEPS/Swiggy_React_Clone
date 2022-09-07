import React, { useEffect, useState } from 'react'
import './HeaderBtween.css';
import EastIcon from '@mui/icons-material/East';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const HeaderBtween = () => {


  let [gonumber,setGonumber]=useState(0)

  let handlegoright=()=>{
    setGonumber(gonumber+1)
  }

  let handlegoleft=()=>{
    setGonumber(gonumber-1)

  }

  useEffect(()=>{
// window.addEventListener('sc')
  })


  // console.log(window.innerWidth)
  return (
    
    <div className='HeaderBtween'>
       
        <div className={ gonumber===1 ? 
           'HeaderBtween_inside HeaderBtween_inside_1'
           : gonumber===2 ? 'HeaderBtween_inside HeaderBtween_inside_2'
           : gonumber===3 ? 'HeaderBtween_inside HeaderBtween_inside_3'
           : gonumber===4 ? 'HeaderBtween_inside HeaderBtween_inside_4'
           : gonumber===5 ? 'HeaderBtween_inside HeaderBtween_inside_5'
           
           :'HeaderBtween_inside '
           } >
      
      
      
      
      
      
      
        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep' alt='offer.img'/>
        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t' alt='offer.img'/>
       <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ehchczipeejs7qrk82u6' alt='offer.img'/>
        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v' alt='offer.img'/>
        <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3' alt='offer.img'/>
         

         
        </div>

        {gonumber <4 &&
        <div className='HeaderBtween_inside_gorightbtn'
        
        
        >
          <button
          onClick={handlegoright}
          > <EastIcon
          className='HeaderBtween_inside_gorightbtn_icon'
          />
          </button>

         </div>}

         {
          gonumber >0 &&
         <div className='HeaderBtween_inside_goleftbtn'
        
         >
          <button
           onClick={handlegoleft}
          > <KeyboardBackspaceIcon
          className='HeaderBtween_inside_goleftbtn_icon'
          />
          </button>

       
    </div>
         }

    </div>
  )
}

export default HeaderBtween
