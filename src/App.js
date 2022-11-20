import './App.css';
import Sector1 from './sector1';
import Dashboard from './dashBoard';
import Home from './home';
import SignIn from './signIn';
import React from 'react';
import { Routes, Route, Navigate} from "react-router-dom"
import axios from 'axios';
function App() {
  const [userDetails,setUserDetails]=React.useState({isLoggedIn:false});
  React.useEffect(()=>{axios({
      method: 'post',
      url:"http://192.168.137.220:4000/login",
      headers: {'Content-Type': 'application/json'}, 
      withCredentials:true,
      }).then(response=>{
          setUserDetails(prev=>(response.data));
      });
    },[]);
  console.log(userDetails);
  return (
    <div className='App'>
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/signIn" element={ <SignIn/> } />
        <Route exact path="/dashboard" element={ <Dashboard/> } />
        <Route exact path="/sector1" element={ <Sector1/> } />
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
    </div>
  );
}

export default App;
