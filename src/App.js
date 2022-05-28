import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import "./assets/css/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
