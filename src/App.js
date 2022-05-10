import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import SignIn from './Components/SignIn/SignIn';
import HomePage from './Components/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from "./Components/SignUp/SignUp";
import { AuthProvider } from "./Providers/AuthProvider";

function App() {


  return (
    <BrowserRouter>
    <AuthProvider>
      <div className="App">

        {/* Website header */ }
        <Header></Header>

          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="login" element={<SignIn />} />
            <Route exact path="signup" element={<SignUp />} />
          </Routes>
      </div>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
