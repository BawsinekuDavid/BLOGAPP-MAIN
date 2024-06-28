// pages/HomePage.tsx
import React from 'react';
import Navbar from '../navbar/navbar';
 import Header from '../Headers/Header';
import Posts from '../Posts/Post';

 
  
const Home: React.FC = () => {

  return (
    <>
    <Navbar />
    <Header/>
    <Posts/>
    </>
  );
};

export default Home;
