import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./Components/Header/Header";
import SignIn from './Components/SignIn/SignIn';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from "./Components/SignUp/SignUp";

function App() {


  return (
    <div className="App">

      {/* Website header */ }
      <Header></Header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
