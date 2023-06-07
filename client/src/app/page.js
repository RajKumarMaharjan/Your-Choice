'use client';
import React from 'react';
import HomePage from '../components/homePage/page'
import NavBar from '../components/navbar/page'
import { useSelector } from "react-redux";
import UserDashboard from '../components/user/page';
import AdminDashboard from '../components/admin/page';

const Home = () => {
  const { token, role , isLoggedIn} = useSelector((state) => state.user);

const PrimaryPages = ()=>{
  switch(role){
    case 'user':
      return <UserDashboard/>
    case 'admin': 
      return <AdminDashboard/>
    default:
      return <HomePage/>
  }

}

  return (
    <>
    <NavBar/>
    <PrimaryPages/>
    </>
    
  )
  
  
};

export default Home;
