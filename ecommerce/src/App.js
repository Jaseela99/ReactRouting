import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./components/Home"
import Nav from "./components/Nav"
import Signin from './components/Signin';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products" element={<Signin/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
