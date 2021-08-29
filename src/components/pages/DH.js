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
      original='images/dh-1.jpg'
      thumbnail='images/dh-1.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/dh-1.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow1'>
    <Item
      original='images/dh-2.jpg'
      thumbnail='images/dh-2.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/dh-2.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow1'>
    <Item
      original='images/dh-3.jpg'
      thumbnail='images/dh-3.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/dh-3.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow1'>
    <Item
      original='images/dh-4.jpg'
      thumbnail='images/dh-4.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/dh-4.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow1'>
    <Item
      original='images/dh-5.jpg'
      thumbnail='images/dh-5.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
        <img ref={ref} onClick={open} src='images/dh-5.jpg' style={{ display: 'block', width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }} />
        </div>
      )}
    </Item></div>
    <div className='picturerow2'>
    <Item
      original='images/dh-6.jpg'
      thumbnail='images/dh-6.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/dh-6.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow2'>
    <Item
      original='images/dh-7.jpg'
      thumbnail='images/dh-7.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/dh-7.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow2'>
    <Item
      original='images/dh-8.jpg'
      thumbnail='images/dh-8.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/dh-8.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
   
  </Gallery>

)
      }