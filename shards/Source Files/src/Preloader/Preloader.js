import React from 'react';
import Preloade from '../assets/Spinner-2.gif'

const Preloader = () => {
  return (
    <div style={{textAlign:"center"}}>
      <img src={Preloade} alt="Loading..."/>
    </div>
  );
};

export default Preloader;
