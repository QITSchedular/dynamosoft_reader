import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='container p-1'>
      <Header />
      <div 
      className="container d-flex justify-content-center" 
      style={{  backgroundColor: "rgba(0, 0, 0, 0.7)"}}>
        {children}
    </div>
      <Footer />
    </div>
  );
}

export default Layout;
