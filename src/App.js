import React from 'react';
import { Route,Routes } from "react-router-dom";
import SingleDocter from './SingleDocter'
import Home from './HomePage'

const App = () => {
  return(
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/SingleDocter/:_id" element={<SingleDocter/>} />
  </Routes>
  )
}

export default App
