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
      original='images/py-1.jpg'
      thumbnail='images/py-1.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/py-1.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow1'>
    <Item
      original='images/py-2.jpg'
      thumbnail='images/py-2.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/py-2.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow1'>
    <Item
      original='images/py-3.jpg'
      thumbnail='images/py-3.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/py-3.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow1'>
    <Item
      original='images/py-4.jpg'
      thumbnail='images/py-4.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/py-4.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow1'>
    <Item
      original='images/py-5.jpg'
      thumbnail='images/py-5.jpg'
      width="768"
      height="1024"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
        <img ref={ref} onClick={open} src='images/py-5.jpg' style={{ display: 'block', width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }} />
        </div>
      )}
    </Item></div>
    <div className='picturerow2'>
    <Item
      original='images/py-6.jpg'
      thumbnail='images/py-6.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/py-6.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow2'>
    <Item
      original='images/py-7.jpg'
      thumbnail='images/py-7.jpg'
      width="768"
      height="1024"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/py-7.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow2'>
    <Item
      original='images/py-8.jpg'
      thumbnail='images/py-8.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/py-8.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow2'>
    <Item
      original='images/py-9.jpg'
      thumbnail='images/py-9.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/py-9.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow2'>
    <Item
      original='images/py-10.jpg'
      thumbnail='images/py-10.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/py-10.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow3'>
    <Item
      original='images/py-11.jpg'
      thumbnail='images/py-11.jpg'
      width="768"
      height="1024"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/py-11.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow3'>
    <Item
      original='images/py-12.jpg'
      thumbnail='images/py-12.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/py-12.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='picturerow3'>
    <Item
      original='images/py-13.jpg'
      thumbnail='images/py-13.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/py-13.jpg' style={{ display: 'block',width:"19%", height:"29%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
  </Gallery>

)
      }
