import './App.css';
import React,{useEffect,} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import{Routes,Route} from "react-router-dom";
import Mainpage from './country/main';
import Each from "./country/each"
import HeaderO from './country/header';
import Foote from './country/footer';
function App() {
 





const dispatch = useDispatch();
useEffect(()=>{
axios.get('https://restcountries.com/v3.1/all')
.then(resp=>resp.data)
.then(rep => dispatch({type:"SEND", payload:rep}))
},[])



  return (
    <div className="App">
      <HeaderO/>
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
        <Route path="/mainPage" element={<Each/>}/>
      </Routes>

      <Foote/>

      </div>
  );
}

export default App;
