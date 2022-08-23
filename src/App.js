import logo from './logo.svg';
import './App.css';
import Signup from './Components/FirstPage/FirstSection/Signup';
// import FirstSection from './Components/FirstPage/FirstSection/FirstSection';
import FirstPage from './Components/FirstPage/FirstPage';
import CombineFooter from './Components/Footer/CombineFooter';
import { useSelector } from 'react-redux';
import { Selectlocationinfo, Selectlogininfo } from './Components/Redux_toolkit/Redux_Slice';
import InsideCombine from './Components/Inside/InsideCombine';
import Header2 from './Components/Inside/Header/Header2';
import { useEffect, useState } from 'react';
import { LocationCities } from './LocationCities';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Route, Link, Routes, useNavigate} from 'react-router-dom'
import City from './Components/Inside/InsideMaincontent/CitiesInfo/City';
import Moreinfo from './Components/Inside/InsideMaincontent/CitiesInfo/Moreinfo';



function App() {



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

        <Route path='city' element={<City/>}/>
        <Route path='moreinfo' element={<Moreinfo/>}/>
      </Routes>
         
      <CombineFooter/>
    
      </div>

    </div>
  );
}

export default App;
