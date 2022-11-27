import React from 'react';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Shop  from './pages/Shop';
import  About  from './pages/About';
import  Contact  from './pages/Contact';
import Wish from './pages/wish';
import Login from './pages/Login';
import Cart from './pages/cart';

function App() {

  return (
    <Router>
        <div className="App">
          <Routes> 
            <Route path = "/" element = {<Home />}> </Route>
            <Route path = "/shop" element = {<Shop />}> </Route>
            <Route path = "/about" element = {<About />}> </Route>
            <Route path = "/contact" element = {<Contact />}> </Route>
            <Route path = "/cart" element = {<Cart />}> </Route>
            <Route path = "/login" element = {<Login />}> </Route>
            <Route path = "/wish" element = {<Wish />}> </Route>
          </Routes>
          </div>
    </Router>
  )
}

export default App
