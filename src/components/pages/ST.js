import React from 'react';
import '../../App.css';
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import './Cards.css';


export default function Album() {
  return(
  <Gallery>
    <div className='nypicturerow1'>
    <Item
      original='images/st-1.jpg'
      thumbnail='images/st-1.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/st-1.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow1'>
    <Item
      original='images/st-2.jpg'
      thumbnail='images/st-2.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/st-2.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow1'>
    <Item
      original='images/st-3.jpg'
      thumbnail='images/st-3.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/st-3.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow1'>
    <Item
      original='images/st-4.jpg'
      thumbnail='images/st-4.jpg'
      width="768"
      height="1024"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/st-4.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow1'>
    <Item
      original='images/st-5.jpg'
      thumbnail='images/st-5.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
        <img ref={ref} onClick={open} src='images/st-5.jpg' style={{ display: 'block', width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }} />
        </div>
      )}
    </Item></div>
    <div className='nypicturerow1'>
    <Item
      original='images/st-6.jpg'
      thumbnail='images/st-6.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
        <img ref={ref} onClick={open} src='images/st-6.jpg' style={{ display: 'block', width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }} />
        </div>
      )}
    </Item></div>
    <div className='nypicturerow2'>
    <Item
      original='images/st-7.jpg'
      thumbnail='images/st-7.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/st-7.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow2'>
    <Item
      original='images/st-8.jpg'
      thumbnail='images/st-8.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/st-8.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow2'>
    <Item
      original='images/st-9.jpg'
      thumbnail='images/st-9.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/st-9.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow2'>
    <Item
      original='images/st-10.jpg'
      thumbnail='images/st-10.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/st-10.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow2'>
    <Item
      original='images/st-11.jpg'
      thumbnail='images/st-11.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/st-11.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow2'>
    <Item
      original='images/st-12.jpg'
      thumbnail='images/st-12.jpg'
      width="768"
      height="1024"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/st-12.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow3'>
    <Item
      original='images/st-13.jpg'
      thumbnail='images/st-13.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/st-13.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow3'>
    <Item
      original='images/st-14.jpg'
      thumbnail='images/st-14.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/st-14.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow3'>
    <Item
      original='images/st-15.jpg'
      thumbnail='images/st-15.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/st-15.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow3'>
    <Item
      original='images/st-16.jpg'
      thumbnail='images/st-16.jpg'
      width="768"
      height="1024"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/st-16.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    
  </Gallery>

)
      }

