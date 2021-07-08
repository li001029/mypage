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
      original='images/sd-1.jpg'
      thumbnail='images/sd-1.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/sd-1.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow1'>
    <Item
      original='images/sd-2.jpg'
      thumbnail='images/sd-2.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/sd-2.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow1'>
    <Item
      original='images/sd-3.jpg'
      thumbnail='images/sd-3.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/sd-3.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow1'>
    <Item
      original='images/sd-4.jpg'
      thumbnail='images/sd-4.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/sd-4.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow1'>
    <Item
      original='images/sd-5.jpg'
      thumbnail='images/sd-5.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
        <img ref={ref} onClick={open} src='images/sd-5.jpg' style={{ display: 'block', width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }} />
        </div>
      )}
    </Item></div>
    <div className='picturerow2'>
    <Item
      original='images/sd-6.jpg'
      thumbnail='images/sd-6.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/sd-6.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow2'>
    <Item
      original='images/sd-7.jpg'
      thumbnail='images/sd-7.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/sd-7.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow2'>
    <Item
      original='images/sd-8.jpg'
      thumbnail='images/sd-8.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/sd-8.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow2'>
    <Item
      original='images/sd-9.jpg'
      thumbnail='images/sd-9.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/sd-9.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow2'>
    <Item
      original='images/sd-10.jpg'
      thumbnail='images/sd-10.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/sd-10.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow3'>
    <Item
      original='images/sd-11.jpg'
      thumbnail='images/sd-11.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/sd-11.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
  </Gallery>

)
      }

