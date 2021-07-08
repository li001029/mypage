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
      original='images/ny-1.jpg'
      thumbnail='images/ny-1.jpg'
      width="768"
      height="1024"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/ny-1.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow1'>
    <Item
      original='images/ny-2.jpg'
      thumbnail='images/ny-2.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/ny-2.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow1'>
    <Item
      original='images/ny-3.jpg'
      thumbnail='images/ny-3.jpg'
      width="768"
      height="1024"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/ny-3.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow1'>
    <Item
      original='images/ny-4.jpg'
      thumbnail='images/ny-4.jpg'
      width="768"
      height="1024"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/ny-4.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow1'>
    <Item
      original='images/ny-5.jpg'
      thumbnail='images/ny-5.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
        <img ref={ref} onClick={open} src='images/ny-5.jpg' style={{ display: 'block', width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }} />
        </div>
      )}
    </Item></div>
    <div className='nypicturerow1'>
    <Item
      original='images/ny-6.jpg'
      thumbnail='images/ny-6.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
        <img ref={ref} onClick={open} src='images/ny-6.jpg' style={{ display: 'block', width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }} />
        </div>
      )}
    </Item></div>
    <div className='nypicturerow2'>
    <Item
      original='images/ny-7.jpg'
      thumbnail='images/ny-7.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/ny-7.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow2'>
    <Item
      original='images/ny-8.jpg'
      thumbnail='images/ny-8.jpg'
      width="768"
      height="1024"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/ny-8.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow2'>
    <Item
      original='images/ny-9.jpg'
      thumbnail='images/ny-9.jpg'
      width="768"
      height="1024"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/ny-9.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow2'>
    <Item
      original='images/ny-10.jpg'
      thumbnail='images/ny-10.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/ny-10.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow2'>
    <Item
      original='images/ny-11.jpg'
      thumbnail='images/ny-11.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/ny-11.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow2'>
    <Item
      original='images/ny-12.jpg'
      thumbnail='images/ny-12.jpg'
      width="768"
      height="1024"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/ny-12.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow3'>
    <Item
      original='images/ny-13.jpg'
      thumbnail='images/ny-13.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/ny-13.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow3'>
    <Item
      original='images/ny-14.jpg'
      thumbnail='images/ny-14.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/ny-14.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow3'>
    <Item
      original='images/ny-15.jpg'
      thumbnail='images/ny-15.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/ny-15.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow3'>
    <Item
      original='images/ny-16.jpg'
      thumbnail='images/ny-16.jpg'
      width="768"
      height="1024"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/ny-16.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow3'>
    <Item
      original='images/ny-17.jpg'
      thumbnail='images/ny-17.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/ny-17.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow3'>
    <Item
      original='images/ny-18.jpg'
      thumbnail='images/ny-18.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/ny-18.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow4'>
    <Item
      original='images/ny-19.jpg'
      thumbnail='images/ny-19.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/ny-19.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow4'>
    <Item
      original='images/ny-20.jpg'
      thumbnail='images/ny-20.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/ny-20.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow4'>
    <Item
      original='images/ny-21.jpg'
      thumbnail='images/ny-21.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/ny-21.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow4'>
    <Item
      original='images/ny-22.jpg'
      thumbnail='images/ny-22.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/ny-22.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow4'>
    <Item
      original='images/ny-23.jpg'
      thumbnail='images/ny-23.jpg'
      width="768"
      height="1024"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/ny-23.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
    <div className='nypicturerow4'>
    <Item
      original='images/ny-25.jpg'
      thumbnail='images/ny-25.jpg'
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <div style={{ display: 'inline-block', margin: 5 }}>
          <img ref={ref} onClick={open} src='images/ny-25.jpg' style={{ display: 'block',width:"16%", height:"20%", cursor: 'pointer', marginBottom: 5 }}/>
        </div>
      )}
    </Item>
    </div>
  </Gallery>

)
      }

