import React from 'react';
import '../../App.css';
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import './Cards.css';


export default function Album() {
  return(
  <Gallery>
    <div className='picturerow1'>
    <Item
      original='images/msp-1.jpg'
      thumbnail='images/msp-1.jpg'
      width="768"
      height="1024"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/msp-1.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow1'>
    <Item
      original='images/msp-2.jpg'
      thumbnail='images/msp-2.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/msp-2.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow1'>
    <Item
      original='images/msp-3.jpg'
      thumbnail='images/msp-3.jpg'
      width="768"
      height="1024"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/msp-3.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow1'>
    <Item
      original='images/msp-4.jpg'
      thumbnail='images/msp-4.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/msp-4.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
   
    
  </Gallery>

)
      }

