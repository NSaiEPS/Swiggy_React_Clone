import logo from './logo.svg';
import './App.css';
import Signup from './Components/FirstPage/FirstSection/Signup';
// import FirstSection from './Components/FirstPage/FirstSection/FirstSection';
import FirstPage from './Components/FirstPage/FirstPage';
import CombineFooter from './Components/Footer/CombineFooter';
import { useSelector } from 'react-redux';
import { Selectlogininfo } from './Components/Redux_toolkit/Redux_Slice';
import InsideCombine from './Components/Inside/InsideCombine';

function App() {

  let firstchange=false;

  let selectLogininfo=useSelector(Selectlogininfo)
  
  let signup=selectLogininfo?.status;

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

      <div className='App_Maincontent_insid'>

        <InsideCombine/>


      </div>
         
         <CombineFooter/>
      </div>

    </div>
  );
}

export default App;
