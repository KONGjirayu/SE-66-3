import React from 'react';
<<<<<<< HEAD

import {BrowserRouter,Routes,Route, Router} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
// import Index from './components/index';

// import Layout from './components/';
// import Index from './components/';

// const WithNavbar = () => 
// <Layout>
//       <switch>  
//         <Routes>
//           {/* <Route path='/signup' element= {<Signup/>}></Route> */}
//           <Route path='/home' element= { <Home/>  }></Route>
//           <Route path='/Index' element= { <Index/>  }></Route>
//         </Routes>
//       </switch>
// </Layout>;

function App() {
  return ( 
    // <Provider store={store}>    
    <BrowserRouter className="App"> 
          <switch>  
              <Routes>
                <Route path='/' element={<Login/>} />
                <Route path='/home' element= { <Home/>  }></Route>
                {/* <Route  component={WithNavbar} /> */}
              </Routes>
          </switch> 
    </BrowserRouter>
    // </Provider>
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Shift from './components/Shift'; // Import Shift component
import ScheduleForm from './components/ScheduleForm'; // Import ScheduleForm component

import Login from './components/Login'; // Import Login component
import Signup from './components/Signup';
import Home1 from './components/Home1';
import Home2 from './components/Home2';
import Home3 from './components/Home3';
import Home4 from './components/Home4';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shift" element={<Shift />} />
        <Route path="/schedule" element={<ScheduleForm />} /> 
        <Route path="/schedule" element={<ScheduleForm />} /> 
        
        <Route path="/" element={<Login />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/home3" element={<Home3 />} />
        <Route path="/home4" element={<Home4 />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
>>>>>>> kong_1
  );
};

export default App;




      // <Routes>
      //   <Route path='/' element= {<Login/>} />
      //   <Route path='/signup' element= {<Signup/>}></Route>
      //   <Route path='/home' element= { <Home/>  }></Route>
      //   <Route component={WithNavbar}></Route> 
      // </Routes>
