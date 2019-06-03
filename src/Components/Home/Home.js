import React, { Component } from "react";
import Navbar from '../Navbar/Navbar'
import { Parallax } from "react-parallax";
import heroImage from '../../Assets/Logo.png';
import './Home.css'


export default class Home extends Component {
  render() {
    return (
      <div style={{height: '200vh'}}>
        <Parallax bgImage={heroImage} strength={225}>
          <Navbar />
        </Parallax>
        <div className='image-container'>
          <div className='img1'></div>
          <div className='img2'></div>
          <div className='img3'></div>
          <div className='img4'></div>
        </div>
        
        
      </div>
    );
  }
}
