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
      original='images/bs-1.jpg'
      thumbnail='images/bs-1.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/bs-1.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow1'>
    <Item
      original='images/bs-2.jpg'
      thumbnail='images/bs-2.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/bs-2.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow1'>
    <Item
      original='images/bs-3.jpg'
      thumbnail='images/bs-3.jpg'
      width="768"
      height="1024"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/bs-3.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow1'>
    <Item
      original='images/bs-4.jpg'
      thumbnail='images/bs-4.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/bs-4.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow1'>
    <Item
      original='images/bs-5.jpg'
      thumbnail='images/bs-5.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
        <img ref={ref} onClick={open} src='images/bs-5.jpg' style={{ display: 'block', width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }} />
        </div>
      )}
    </Item></div>
    <div className='nypicturerow1'>
    <Item
      original='images/bs-6.jpg'
      thumbnail='images/bs-6.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
        <img ref={ref} onClick={open} src='images/bs-6.jpg' style={{ display: 'block', width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }} />
        </div>
      )}
    </Item></div>
    <div className='nypicturerow2'>
    <Item
      original='images/bs-7.jpg'
      thumbnail='images/bs-7.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/bs-7.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow2'>
    <Item
      original='images/bs-8.jpg'
      thumbnail='images/bs-8.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/bs-8.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow2'>
    <Item
      original='images/bs-9.jpg'
      thumbnail='images/bs-9.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/bs-9.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow2'>
    <Item
      original='images/bs-10.jpg'
      thumbnail='images/bs-10.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/bs-10.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow2'>
    <Item
      original='images/bs-11.jpg'
      thumbnail='images/bs-11.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/bs-11.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow2'>
    <Item
      original='images/bs-12.jpg'
      thumbnail='images/bs-12.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/bs-12.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow3'>
    <Item
      original='images/bs-13.jpg'
      thumbnail='images/bs-13.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/bs-13.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow3'>
    <Item
      original='images/bs-14.jpg'
      thumbnail='images/bs-14.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/bs-14.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow3'>
    <Item
      original='images/bs-15.jpg'
      thumbnail='images/bs-15.jpg'
      width="768"
      height="1024"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/bs-15.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow3'>
    <Item
      original='images/bs-16.jpg'
      thumbnail='images/bs-16.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/bs-16.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow3'>
    <Item
      original='images/bs-17.jpg'
      thumbnail='images/bs-17.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/bs-17.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow3'>
    <Item
      original='images/bs-18.jpg'
      thumbnail='images/bs-18.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/bs-18.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow4'>
    <Item
      original='images/bs-19.jpg'
      thumbnail='images/bs-19.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/bs-19.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow4'>
    <Item
      original='images/bs-20.jpg'
      thumbnail='images/bs-20.jpg'
      width="768"
      height="1024"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/bs-20.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow4'>
    <Item
      original='images/bs-21.jpg'
      thumbnail='images/bs-21.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/bs-21.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    
  </Gallery>

)
      }



