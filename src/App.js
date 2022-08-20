import logo from './logo.svg';
import './App.css';
import Signup from './Components/FirstPage/FirstSection/Signup';
import FirstSection from './Components/FirstPage/FirstSection/FirstSection';
import FirstPage from './Components/FirstPage/FirstPage';
import CombineFooter from './Components/Footer/CombineFooter';

function App() {

  let signup=false;
  let firstchange=true;
  return (
    <div className="App">
      <div className='App_inside'>

      <div className='App_Maincontent'>
      
      <div>
      {firstchange && <FirstPage/>}

      </div>
      
      <div>{signup && <Signup/>}</div>

      </div>

         
         <CombineFooter/>
      </div>

    </div>
  );
}

export default App;
