import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import './Layout.css';

export const Layout = () => {
  return (
    <div className="wrapper">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
};

