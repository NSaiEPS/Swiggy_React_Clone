import logo from './logo.svg';
import './App.css';
import Signup from './Components/FirstPage/FirstSection/Signup';
// import FirstSection from './Components/FirstPage/FirstSection/FirstSection';
import FirstPage from './Components/FirstPage/FirstPage';
import CombineFooter from './Components/Footer/CombineFooter';
import { useSelector } from 'react-redux';
import { Selectcityinfo, Selectlocationinfo, Selectlogininfo, Selectmoreinfo } from './Components/Redux_toolkit/Redux_Slice';
import InsideCombine from './Components/Inside/InsideCombine';
import Header2 from './Components/Inside/Header/Header2';
import { useEffect, useState } from 'react';
import { LocationCities } from './LocationCities';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Route, Link, Routes, useNavigate} from 'react-router-dom'
import City from './Components/Inside/InsideMaincontent/CitiesInfo/City';
import Moreinfo from './Components/Inside/InsideMaincontent/MoreInfo/Moreinfo';
import Cart from './Components/Inside/InsideMaincontent/MoreInfo/Cart';
import Help_Support from './Components/Inside/InsideMaincontent/MoreInfo/Helppage/Help_Support';
import Search from './Components/Inside/InsideMaincontent/MoreInfo/Search';
import Offers from './Components/Inside/InsideMaincontent/MoreInfo/Offers';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from './Firebase';
import Spinner from 'react-spinkit'


function App() {

  let selectCityInfo=useSelector(Selectcityinfo)
  // console.log(selectCityInfo)
  let navigate=useNavigate()
let selectMoreInfo=useSelector(Selectmoreinfo)

const [userss,loading]=useAuthState(auth)


  // let city='Barsi'

  // if(LocationCities.more.includes(city)){
  //   alert('city found')
  // }
  // else {
  //   alert('city not found')}
  

  let selectLogininfo=useSelector(Selectlogininfo)
  let selectLocationInfo=useSelector(Selectlocationinfo)
  // console.log(selectLogininfo)
  // if(selectLocationInfo.status){
  //   console.log('yes')
  // }

let firstchange=false;
  firstchange=selectLocationInfo?.active
  // console.log(!firstchange)
  let signup=selectLogininfo?.status;
  // let specialheader=false;
  // let [specialheader,setSpecialheader]=useState(false)


  // window.addEventListener('scroll',()=>{
  //   if(window.scrollY>=450) return setSpecialheader(true)
  //   return setSpecialheader(false)
  // })

//   useEffect(()=>{
// w
//   },[])

useEffect(()=>{

  (!selectCityInfo) && navigate('/')

},[selectCityInfo])

// (!selectMoreInfo || !selectCityInfo) && navigate('/')

// },[selectCityInfo,selectMoreInfo])

// console.log(selectMoreInfo)

// useEffect(()=>{
//   // document.body.style.overflow = "hidden";
//   if(!selectLogininfo.status){
//       document.body.style.overflowY = "scroll";

//   }
 


// },[selectLogininfo])

if(loading){
  return(
  <div className='loading_app'>
  <div className='loading_spin'>
    {/* <img src='https://edamam-product-images.s3.amazonaws.com/web-img/4d9/4d9084cbc170789caa9e997108b595de.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDNcGN0cZPzzCbVWTk%2BDpcU3dmnhcFxWY9mCZ01OTON9AiEAt0mQs3CbxZaBZPlAkedhHyUAd29Vb56%2FF5I7CQ4dvwoq0gQIKxAAGgwxODcwMTcxNTA5ODYiDDdqr2GRtO%2FyHiOgziqvBPzmpiuIKNFNXd9M7jYeUyfjjNDX5lbL9sUXmpRsaXggHTtbOufNHWCH3v127eUPzqmarS2OaaPkH90KLrpfyICoxF7COp557wcQDzzecx1ji9HRUXDsrLxOmuDA8ezPURdj%2BIT0pYBRrvf%2FE4WzHAYKs9impYbyCBw%2FuwltdMC%2B0loglAlt%2FvOIJ4mTYNK3q7Gt1BEj6Z3yVn5IvLeDZCXYUUm4bCvjqGjRGl41aw9vbhJsOV%2Ff9jUM2bHrnX5uzxXRc4IKSJXld77m%2B8uG6LQBzgY35cK7WAL0aD%2Fy1hioy7Bt6VIED7r8GhpymVv806xuC1HpOrOHhyMTt%2FvvWeojE%2Fo35GGBpj%2B8ZA2NIkWcCk01lLsD1eBAkZ8uD3u1xBqT9lfRo%2BLR1TOGo01KzCc6mGe0tJFQW0mw3lP0NgNBWAlIkY04vvargMcZ1kLuuAsmHglKbY7zhR75LjGRUYUbpEIvlLHw81dX4ps1YUXYfmpnbCykU0OPg2yzErUXDrbzCrS1XzhsbiquMQiVNbh%2FSbMP6XN%2F6wkoKN9fxmL96x0MmUf8Qu03uhX9JwCrRTQJWVG9pLXBybnBvAxyUn%2F4XyKcsoI8fz6YiR25Zaum9tp0W2KCbVRfvhLoSNFar%2BqiaaMBeoJHdNxrN%2F8%2Ff37ozXDDAi3u2dv9CGfolfusBR84B2ta8rcMPvyBFQq6t7ywyKe0T%2FTgFiV5ilLogtLdSz6g4AUFU2xP%2Fjfb7i0wh6bflgY6qQEQNWCuX6t0ZifX9e2zDeO5eKAK7p8RSTP4h7BNI%2B1HJuKeFNu4cjqL1oc%2BOV3cdcZWCLl4N7VG6q1ALhSXDqtKqrxyZgcXz0WRK%2Fc0yGA8HsMzAQ4pXqgt3jgAJCMho4whzsgssCxTQe7rdF%2FgDjHbKQAtvTXL25FoRaXR74TZpn6%2FVXV0z1vXYiufR%2BPxFQ3hPQPZwMAwbNngl1EyhKjldcmk9Fwbll%2By&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220720T103634Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLGK2OIY5%2F20220720%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b04ad0b09258898f5eaa869cb92b81fbfd11c4ef8be541617d0ed51d80b6803b' alt='Reipe img' /> */}
    <img className='Logo_App'  
      src='https://anujbansal16.github.io/images/logos/swiggy.svg' alt='Devi restarent'/>
 
 <Spinner name="circle" color="blue"/>
    

  </div>
</div>)
}

  return (
    <div className="App">
      <div className='App_inside'>
      <ToastContainer/>

      <div className='App_Maincontent'>
      
      <div>
      {/* {!firstchange && <FirstPage/>} */}

      </div>
      
     

      </div>
      {signup &&
      <div className='App_inside_Signup'
      > <Signup/>
      </div>}

      {/* <div className='App_Maincontent_inside'>
        {specialheader && firstchange &&
        
        <div className='App_Maincontent_inside_header2'>
        <Header2/>
        </div>
        }
      

      
       

      </div> */}
       {/* {firstchange &&
         <InsideCombine/> } */}
      <Routes>
      <Route path='/' element={
        firstchange ?
      <InsideCombine/>:<FirstPage/>
    }/>

        <Route path={`city/${selectCityInfo}`} element={<City/>}/>
        <Route path={`moreinfo`} element={<Moreinfo/>}/>
        {/* <Route path={`moreinfo/${selectMoreInfo}`} element={<Moreinfo/>}/> */}
        <Route path='support' element={<Help_Support/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='search' element={<Search/>}/>
        <Route path='offers' element={<Offers/>}/>
    
    {/* offers */}
    
      </Routes>
         
      <CombineFooter/>
    
      </div>

    </div>
  );
}

export default App;
