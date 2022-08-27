import React from 'react'
import Header1 from '../../Header/Header1'
import './Search.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


const Search = () => {
  return (
    <div
    className='Search'
    >

        <div className='Search_inside'>
        <div className='Search_inside_header'>

            <Header1/>
            </div>

            <div className='Search_inside_main'>
                <div className='Search_inside_main_input'>
       <input placeholder='Search for restauramta and food'
       autoFocus />
       <SearchRoundedIcon
       
       className='Search_inside_main_input_icon'/>
                </div>

            </div>

        </div>

        <div className='Search_outside_main'>
          <div className='Search_outside_main_cuisines'>


            <h2>Popular Cuisines</h2>
            <div className='Search_outside_main_cuisines_imgpart'>
              <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/lbtzwnwla1pam1np4jtg'
              alt='cui.img'/>
            
            <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/kmvbd3hyswd147u4qdn1'
              alt='cui.img'/>

<img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/hvc4l0r0bgrtl6vdbbzv'
              alt='cui.img'/>

<img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/oea45ipb1ctr4m61m7af'
              alt='cui.img'/>

<img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/iwvt76wvh3a7dxmkljxd'
              alt='cui.img'/>

{/* <img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/iwvt76wvh3a7dxmkljxd'
              alt='cui.img'/> */}

<img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/vntl1lutut9bqsxjninx'
              alt='cui.img'/>

<img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/wfzaxacltlxyi4shmm2u'
              alt='cui.img'/>
<img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/hk7gdfeiwmy5nx6prv97'
              alt='cui.img'/>

<img src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/pa6ydsixfemhr7r9rjzc'
              alt='cui.img'/>
            
            
            </div>

          </div>

        </div>
    </div>
  )
}

export default Search