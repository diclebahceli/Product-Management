import React, { useState, useEffect } from "react";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  const [token, setToken] = useState(false);

  if(token){
    sessionStorage.setItem('token',JSON.stringify(token))
  }

  useEffect(()=>{

    if(sessionStorage.getItem('token')){
      setToken(JSON.parse(sessionStorage.getItem('token')))
    }
  },[])


  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Signup/>}/>
        <Route path={'/login'} element={<Login setToken={setToken}/>}/>
        {token?<Route path={'/homepage'} element={<Home token={token}/>}/>:''}
      </Routes>
      </div>)
}

export default App;