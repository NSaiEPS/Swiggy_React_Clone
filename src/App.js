import logo from './logo.svg';
import './App.css';
import Signup from './Components/FirstPage/FirstSection/Signup';
// import FirstSection from './Components/FirstPage/FirstSection/FirstSection';
import FirstPage from './Components/FirstPage/FirstPage';
import CombineFooter from './Components/Footer/CombineFooter';
import { useSelector } from 'react-redux';
import { Selectlogininfo } from './Components/Redux_toolkit/Redux_Slice';
import InsideCombine from './Components/Inside/InsideCombine';
import Header2 from './Components/Inside/Header/Header2';
import { useEffect, useState } from 'react';

function App() {

  let firstchange=false;

  let selectLogininfo=useSelector(Selectlogininfo)
  
  let signup=selectLogininfo?.status;
  // let specialheader=false;
  let [specialheader,setSpecialheader]=useState(false)


  window.addEventListener('scroll',()=>{
    if(window.scrollY>=450) return setSpecialheader(true)
    return setSpecialheader(false)
  })

//   useEffect(()=>{
// w
//   },[])

  return (
    <div className="App">
      <div className='App_inside'>

      <div className='App_Maincontent'>
      
      <div>
      {firstchange && <FirstPage/>}

      </div>
      
     

      </div>
      {signup &&
      <div className='App_inside_Signup'
      > <Signup/>
      </div>}

      <div className='App_Maincontent_inside'>
        {specialheader &&
        
        <div className='App_Maincontent_inside_header2'>
        <Header2/>
        </div>
        }
       

        <InsideCombine/>
       

      </div>
         
      <CombineFooter/>
      </div>

    </div>
  );
}

export default App;
