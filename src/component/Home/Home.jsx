import React, { useEffect, useState } from 'react';
import './Home.css'; // Import the integrated CSS
import Spline from '@splinetool/react-spline';
import Menu from '../Menuicon/Menu';
const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // When the scroll is greater than 10px, set isScrolled to true
      if (window.scrollY > 10) {
        setIsScrolled(true);
        console.log("scroll trigered");
      } else {
        setIsScrolled(false); // Reset isScrolled when the scroll is less than 10px
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="home-section min-h-full">
      {/* <Menu/> */}
      <Spline
        style={{
          height: '100%',
          // overflow: 'hidden',
          filter: 'brightness(0.5)',
          width: "100%",

        }}
        scene="/energy_cube.spline"
      />

      {/* <div className={`logo-comp-wrapper`}>
        <img src='/public/logo.png'/>
        {isFixed && <div className='logo-fixed'><img src='/public/logo.png' alt="Logo" /></div>}
      </div> */}

    </section>
  );
};

export default Home;
