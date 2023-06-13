import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Register from "../pages/Register";
// import Contact from "../pages/Contact";

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/home"/>} />
      <Route exact path='/home' element={<Home/>} />
      <Route exact path='/foods' element={<AllFoods/>} />
      <Route exact path='/foods/:productid' element={<FoodDetails/>} />
      <Route exact path='/cart' element={<Cart/>} />
      <Route exact path='/checkout' element={<Checkout/>} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/register' element={<Register/>} />
      {/* <Route exact path='/contact' element={<Contact/>} /> */}
    </Routes>
  )
}

export default Routers
