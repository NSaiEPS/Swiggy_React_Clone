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



function App() {

  let selectCityInfo=useSelector(Selectcityinfo)
  // console.log(selectCityInfo)
  let navigate=useNavigate()
let selectMoreInfo=useSelector(Selectmoreinfo)



  // let city='Barsi'

  // if(LocationCities.more.includes(city)){
  //   alert('city found')
  // }
  // else {
  //   alert('city not found')}
  

  let selectLogininfo=useSelector(Selectlogininfo)
  let selectLocationInfo=useSelector(Selectlocationinfo)

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
      </Routes>
         
      <CombineFooter/>
    
      </div>

    </div>
  );
}

export default App;
