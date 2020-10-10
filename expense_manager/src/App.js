import React from 'react';
import './App.css';
import Navbar from "./Component/Navbar"
import { Routes } from "./Routes/Routes";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;