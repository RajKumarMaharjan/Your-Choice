'use client';
import React from 'react';
import { useSelector } from "react-redux";
import UserDashboard from './user/page';
import AdminDashboard from './admin/page';
import HomePage from './components/homePage/page'
const Home = () => {
  const { token, role, isLoggedIn } = useSelector((state) => state.user);

  const PrimaryPages = () => {
    switch (token && isLoggedIn && role) {
      case 'user':
        return <UserDashboard />
      case 'admin':
        return <AdminDashboard />
      default:
        return <HomePage />
    }

  }

  return (
    <>
      <PrimaryPages />
    </>

  )


};

export default Home;