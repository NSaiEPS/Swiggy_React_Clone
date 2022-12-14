import logo from './logo.svg';
import './App.css';
import Signup from './Components/FirstPage/FirstSection/Signup';
// import FirstSection from './Components/FirstPage/FirstSection/FirstSection';
import FirstPage from './Components/FirstPage/FirstPage';
import CombineFooter from './Components/Footer/CombineFooter';
import { useDispatch, useSelector } from 'react-redux';
import { filterInfoAction, locationAction, loginUserInfoAction, newLocationSearchAction, Selectcityinfo, SelectedItemInfo, SelectFilterInfo, Selectlocationinfo, Selectlogininfo, SelectLoginUserInfo, Selectmoreinfo, SelectnewLocationSearch } from './Components/Redux_toolkit/Redux_Slice';
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
import Search from './Components/Inside/InsideMaincontent/MoreInfo/Search/Search';
import Offers from './Components/Inside/InsideMaincontent/MoreInfo/Offers';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth, db } from './Firebase';
import Spinner from 'react-spinkit'
import Dashboard from './Components/Dashboard/Dashboard';
import Filters from './Components/Inside/Filters/Filters';
import ClearIcon from '@mui/icons-material/Clear';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import { ControlPointDuplicate } from '@mui/icons-material';
import SelectedItem from './Components/Inside/Items/SelectedItem';

function App() {

  let selectCityInfo=useSelector(Selectcityinfo)
  let dispatch=useDispatch()
  let selectLoginUserInfo=useSelector(SelectLoginUserInfo)

  // console.log(selectCityInfo)
  let navigate=useNavigate()
let selectMoreInfo=useSelector(Selectmoreinfo)

const [userss,loading]=useAuthState(auth)
let [focus,setFocus]=useState(false)

let handlefocus=(a)=>{


  a==='focus'? setFocus(true):setFocus(false)
}


let selectFilterInfo=useSelector(SelectFilterInfo)
  
  

  let selectLogininfo=useSelector(Selectlogininfo)
  let selectLocationInfo=useSelector(Selectlocationinfo)
  let selectnewLocationSearch=useSelector(SelectnewLocationSearch)
  let selectedItemInfo=useSelector(SelectedItemInfo)
  
let reqlocation=false;
  reqlocation=selectLocationInfo?.location
  // localStorage.setItem('Swiggy_Clone_location', JSON.stringify(reqlocation))
 
let locationEntered=""
locationEntered= (JSON.parse(localStorage.getItem('Swiggy_Clone_location')))
// console.log(userss)

  let signup=selectLogininfo?.status;
  let location=selectLocationInfo?.location
  // console.log(location)

  let [userInfo,setUserInfo]=useState([])

  let getUserFunction=()=>{
    db.collection('user').onSnapshot((item)=>{
      setUserInfo((item.docs.map((data)=>({
        id:data.id,
        data:data.data()
  
      }))))
  
    })
  
  }

  // console.log(userInfo)
  // console.log(userss?.phoneNumber)



useEffect(()=>{
// let locationEntered=JSON.parse(localStorage.getItem('Swiggy_Clone_location'))
// console.log(locationEntered,'after refresh')
dispatch(
  locationAction(
    {
      active:true,
      location:(locationEntered)
    }
  )

  )

  getUserFunction()

  
},[])



useEffect(()=>{
  userInfo.map((item)=>{
    if(userss?.phoneNumber===`+91${item.data.phoneNumber}`){
      dispatch(
      loginUserInfoAction(
        {
          id:(item.id),
          phoneNumber:(item.data.phoneNumber),
          name:(item.data.name),
          email:(item.data.email)
        }
      ))
    }
  })
},[userInfo])









useEffect(()=>{

  (!selectCityInfo) && navigate('/')

},[selectCityInfo])


let handleEraseFilteringPage=()=>{

 
  dispatch(filterInfoAction({
    active:false
  }))
document.body.style.overflowY='scroll'


}

let [inputval,setInputval]=useState({
  inptext:'',
  location:''
})

let handleEracenewSeacrh=()=>{
  // setNewsearch(false)
  document.body.style.overflowY = "scroll";
  dispatch(newLocationSearchAction(false))



}

let handleInputChange=(e)=>{
  setInputval({
  
    ...inputval,
    inptext:(e.target.value)
    
          })

}

let handleSubmitForm=()=>{
  if((inputval.inptext)){
    // dispatch(
    //   locationAction(
    //     {
    //       active:true,
    //       location:(inputval.inptext)
    //     }
    //   )
    
    //   )
    localStorage.setItem('Swiggy_Clone_location',JSON.stringify(inputval.inptext))
// window.location.reload()
  }
}



// let [cartItems,setCartItems]=useState([])

// let getCartData=()=>{
//   db.collection('user').doc((selectLoginUserInfo.id)).collection('cart').onSnapshot((data)=>{
//     setCartItems((data.docs.map((item)=>({
//       id:item.id,
// data:item.data()



//     }))))
//   })
// }
// useEffect(()=>{
//   getCartData()
//   // alert(cartItems.length)

// },[])

// useEffect(()=>{
//   if(cartItems.length>0){
//   localStorage.setItem('Swiggy_Clone_Cart_Lenght',JSON.stringify(cartItems.length))
//   }
//   else 
//   {
//   localStorage.setItem('Swiggy_Clone_Cart_Lenght',JSON.stringify(cartItems.length))

//   }
// },[cartItems])






if(loading){
  return(
  <div className='loading_app'>
  <div className='loading_spin'>
    {/* <img src='https://edamam-product-images.s3.amazonaws.com/web-img/4d9/4d9084cbc170789caa9e997108b595de.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDNcGN0cZPzzCbVWTk%2BDpcU3dmnhcFxWY9mCZ01OTON9AiEAt0mQs3CbxZaBZPlAkedhHyUAd29Vb56%2FF5I7CQ4dvwoq0gQIKxAAGgwxODcwMTcxNTA5ODYiDDdqr2GRtO%2FyHiOgziqvBPzmpiuIKNFNXd9M7jYeUyfjjNDX5lbL9sUXmpRsaXggHTtbOufNHWCH3v127eUPzqmarS2OaaPkH90KLrpfyICoxF7COp557wcQDzzecx1ji9HRUXDsrLxOmuDA8ezPURdj%2BIT0pYBRrvf%2FE4WzHAYKs9impYbyCBw%2FuwltdMC%2B0loglAlt%2FvOIJ4mTYNK3q7Gt1BEj6Z3yVn5IvLeDZCXYUUm4bCvjqGjRGl41aw9vbhJsOV%2Ff9jUM2bHrnX5uzxXRc4IKSJXld77m%2B8uG6LQBzgY35cK7WAL0aD%2Fy1hioy7Bt6VIED7r8GhpymVv806xuC1HpOrOHhyMTt%2FvvWeojE%2Fo35GGBpj%2B8ZA2NIkWcCk01lLsD1eBAkZ8uD3u1xBqT9lfRo%2BLR1TOGo01KzCc6mGe0tJFQW0mw3lP0NgNBWAlIkY04vvargMcZ1kLuuAsmHglKbY7zhR75LjGRUYUbpEIvlLHw81dX4ps1YUXYfmpnbCykU0OPg2yzErUXDrbzCrS1XzhsbiquMQiVNbh%2FSbMP6XN%2F6wkoKN9fxmL96x0MmUf8Qu03uhX9JwCrRTQJWVG9pLXBybnBvAxyUn%2F4XyKcsoI8fz6YiR25Zaum9tp0W2KCbVRfvhLoSNFar%2BqiaaMBeoJHdNxrN%2F8%2Ff37ozXDDAi3u2dv9CGfolfusBR84B2ta8rcMPvyBFQq6t7ywyKe0T%2FTgFiV5ilLogtLdSz6g4AUFU2xP%2Fjfb7i0wh6bflgY6qQEQNWCuX6t0ZifX9e2zDeO5eKAK7p8RSTP4h7BNI%2B1HJuKeFNu4cjqL1oc%2BOV3cdcZWCLl4N7VG6q1ALhSXDqtKqrxyZgcXz0WRK%2Fc0yGA8HsMzAQ4pXqgt3jgAJCMho4whzsgssCxTQe7rdF%2FgDjHbKQAtvTXL25FoRaXR74TZpn6%2FVXV0z1vXYiufR%2BPxFQ3hPQPZwMAwbNngl1EyhKjldcmk9Fwbll%2By&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220720T103634Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLGK2OIY5%2F20220720%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b04ad0b09258898f5eaa869cb92b81fbfd11c4ef8be541617d0ed51d80b6803b' alt='Reipe img' /> */}
    <img className='Logo_App'  
      src='https://anujbansal16.github.io/images/logos/swiggy.svg' alt='Swiggy.img'/>
 
 <Spinner name="pacman" color="blue"/>
    

  </div>
</div>)
}

  return (
    <div className="App">
      <div className='App_inside'>
      <ToastContainer/>

      <div className='App_Maincontent'>
      
      <div>
      {/* {!reqlocation && <FirstPage/>} */}

      </div>
      
     

      </div>
      {signup &&
      <div className='App_inside_Signup'
      > <Signup/>
      </div>}

 
      <Routes>
      <Route path='/' element={
       (locationEntered|| reqlocation) ?
      <InsideCombine/>:<FirstPage/>
    }/>

        <Route path={`city/${selectCityInfo}`} element={<City/>}/>
        <Route path={`moreinfo`} element={<Moreinfo/>}/>
        <Route path='support' element={<Help_Support/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='search' element={<Search/>}/>
        <Route path='offers' element={<Offers/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
    
        <Route path={`restaurants/${selectedItemInfo?.reqName}`} element={
          <SelectedItem/>
        }/>

{/* <Route path={`restaurants/Cakestry`} element={
          <SelectedItem/>
        }/> */}

    
      </Routes>
         
      <CombineFooter/>
    
      </div>






   {selectFilterInfo.active &&
        <div className='InsideCombine_Filtering_page'>
          <div className='InsideCombine_Filtering_page_inside'>



<div className='InsideCombine_Filtering_page_inside_left'
onClick={handleEraseFilteringPage}

>

</div>
<div className='InsideCombine_Filtering_page_inside_right'
style={{
 
  height:`${(window.innerHeight)}px`
}}
>
<Filters/>
</div>


            </div>
        </div>}




        {
          selectnewLocationSearch &&

 <div className='CitiesSearcher_newSearch_App'>
 
  <div className='CitiesSearcher_newSearch_left'
  >
  
  <div className='CitiesSearcher_newSearch_left_inside'>
    <div>
    <ClearIcon 
  onClick={handleEracenewSeacrh}
  style={{
    cursor:'pointer'
  }}
  />
      </div>


      <div className={focus? 'CitiesSearcher_newSearch_left_inside_input CitiesSearcher_newSearch_left_inside_input_focus':
      'CitiesSearcher_newSearch_left_inside_input'}>
        
        <form onSubmit={handleSubmitForm}
        
        
        >
        <input placeholder='Search for area, street name..'
        
        onChange={
        handleInputChange
      }
        value={inputval.inptext}
        
        onFocus={()=>handlefocus('focus')}
        onBlur={()=>handlefocus('blur')}
        autoFocus
        /></form>
{inputval.inptext &&
  <span
  onClick={()=>{
    setInputval({
      ...inputval,
      inptext:""
    })

  }}
  >
          clear
        </span>}
        
        </div>
        <div className='CitiesSearcher_newSearch_left_inside_GPS'>
          <div><GpsFixedIcon
          className='CitiesSearcher_newSearch_left_inside_GPS_icon'
          />
            </div>
            <div>
              <span>Get current location</span>
              <br/>
              <p>Using GPS
            
              </p>
              </div>
          </div>
    </div>
  </div>

  <div className='CitiesSearcher_newSearch_right'
  onClick={handleEracenewSeacrh}
  >
  </div>
        </div>
        
        }

    </div>
  );
}

export default App;
