import { useState } from 'react';
import './App.css';
import AboutUs from './Components/AboutUs';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
 
  Routes
} from "react-router-dom";


  function App() {
    
    const[alert ,setalert]=useState(null);
    const showalt =(Message, type)=>{
      setalert({
        msg: Message,
        type: type
      })
      setTimeout(() => {
        showalt(null)
      }, 3000);
    }
    const[mode ,setMode]=useState('light');
    const togglemode =()=>{
      if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor ='#001a4d';
        showalt("dark mode has been enabled","success");
      }
      else{
        setMode('light');
        document.body.style.backgroundColor ='white';
        showalt("light mode has been enabled","success");
      }
    }
    // const comode =()=>{
    //   if(mode==='light'){
    //     setMode('red');
    //     document.body.style.backgroundColor ='red';

    //     showalt("dark mode has been enabled","success");

    //   }
    //   else{
    //     setMode('light');
    //     document.body.style.backgroundColor ='white';

    //     showalt("light mode has been enabled","success");
    //   }
    // }
  return (
<>  
<BrowserRouter>
    <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route exact path="/AboutUs" element ={<AboutUs/>}/>
          <Route exact path="/" element={<TextForm showalt={showalt} heading="Enter the text to analyze below" mode={mode}/>}/>        
          </Routes>
    </div>
    </BrowserRouter>
</>
  );
}

export default App;