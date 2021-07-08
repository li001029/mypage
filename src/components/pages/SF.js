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
      original='images/sf-1.jpg'
      thumbnail='images/sf-1.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/sf-1.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow1'>
    <Item
      original='images/sf-2.jpg'
      thumbnail='images/sf-2.jpg'
      width="768"
      height="1024"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/sf-2.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow1'>
    <Item
      original='images/sf-3.jpg'
      thumbnail='images/sf-3.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/sf-3.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow1'>
    <Item
      original='images/sf-4.jpg'
      thumbnail='images/sf-4.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/sf-4.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow1'>
    <Item
      original='images/sf-5.jpg'
      thumbnail='images/sf-5.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
        <img ref={ref} onClick={open} src='images/sf-5.jpg' style={{ display: 'block', width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }} />
        </div>
      )}
    </Item></div>
    <div className='nypicturerow1'>
    <Item
      original='images/sf-6.jpg'
      thumbnail='images/sf-6.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
        <img ref={ref} onClick={open} src='images/sf-6.jpg' style={{ display: 'block', width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }} />
        </div>
      )}
    </Item></div>
    <div className='nypicturerow2'>
    <Item
      original='images/sf-7.jpg'
      thumbnail='images/sf-7.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/sf-7.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow2'>
    <Item
      original='images/sf-8.jpg'
      thumbnail='images/sf-8.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/sf-8.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow2'>
    <Item
      original='images/sf-9.jpg'
      thumbnail='images/sf-9.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/sf-9.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow2'>
    <Item
      original='images/sf-10.jpg'
      thumbnail='images/sf-10.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/sf-10.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow2'>
    <Item
      original='images/sf-11.jpg'
      thumbnail='images/sf-11.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/sf-11.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow2'>
    <Item
      original='images/sf-12.jpg'
      thumbnail='images/sf-12.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/sf-12.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow3'>
    <Item
      original='images/sf-13.jpg'
      thumbnail='images/sf-13.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/sf-13.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow3'>
    <Item
      original='images/sf-14.jpg'
      thumbnail='images/sf-14.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/sf-14.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow3'>
    <Item
      original='images/sf-15.jpg'
      thumbnail='images/sf-15.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/sf-15.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow3'>
    <Item
      original='images/sf-16.jpg'
      thumbnail='images/sf-16.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/sf-16.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow3'>
    <Item
      original='images/sf-17.jpg'
      thumbnail='images/sf-17.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/sf-17.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow3'>
    <Item
      original='images/sf-18.jpg'
      thumbnail='images/sf-18.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/sf-18.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    
  </Gallery>

)
      }

