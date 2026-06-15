import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import './MainLayout.css';

const MainLayout = () => {
  const { pathname } = useLocation();

  // Scroll to the top of the page every time the route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return (
    <div className="main-layout">
      <Navbar />
      
      {/* We display the dynamic breadcrumb at the top of our page routing content */}
      {pathname !== '/' && <Breadcrumb />}

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
