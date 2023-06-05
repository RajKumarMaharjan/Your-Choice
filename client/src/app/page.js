'use client';
import React from 'react';
import HomePage from '../components/home-page/page'
import NavBar from '../components/navbar/page'
import { useSelector } from "react-redux";
import AdminDashboard from './admin/page'
import UserDashboard from './user/page';



const Home =()=>{
 
  return(
    <>
    <NavBar/>
    <HomePage/>
    </>
  )
}
export default Home