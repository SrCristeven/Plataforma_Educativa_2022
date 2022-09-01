import React, {useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import Menu_principal from './components/Menu_principal';
import Video_clase from './components/Video_clase';
import Video_clase_resta from './components/Video_clase_resta';
import Video_clase_multiplicacion from './components/Video_clase_multiplicacion';
import  { BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom';
import {AnimatePresence} from "framer-motion";

function App() {

  return (
    <>
      <AnimatePresence>
        <Switch>
          <Route path='/' element={<Menu_principal/>}/>
          <Route path='/clase_suma' element={<Video_clase/>}/>
          <Route path='/clase_resta' element={<Video_clase_resta/>}/>
          <Route path='/clase_multiplicacion' element={<Video_clase_multiplicacion/>}/>
        </Switch>
      </AnimatePresence>
    
      {/* <Menu_principal></Menu_principal> */}
      {/* <Video_clase></Video_clase> */}
    </>
  );
}

export default App;
