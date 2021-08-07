import React from 'react';
import './Cards.css';
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
  } from "react-google-maps";
  import {Link} from 'react-router-dom';

function Map() {
  return (
    <GoogleMap
    defaultZoom={2.4}
    defaultCenter={{ lat: 19.8968, lng: 155.5828 }}
  >
       <Marker    
      position={{
        lat: 37.7749,
        lng: -122.4194
      }}
      onClick={gotosf}
    />
     <Marker 
      position={{
        lat: 47.6062,
        lng: -122.3321
      }}
      onClick={gotost}
    />
     <Marker 
      position={{
        lat: 49.2827,
        lng: -123.1207
      }}
      onClick={gotovc}
    />
     <Marker
      position={{
        lat: 51.0447,
        lng: -114.0719
      }}
      onClick={gotocalg}
    />
    <Marker
      position={{
        lat: 34.0522,
        lng: -118.2437
      }}
      onClick={gotoLA}
    />
      <Marker
      position={{
        lat: 32.7157,
        lng: -117.1611
      }}
      onClick={gotoSD}
    />
    <Marker
      position={{
        lat: 44.9778,
        lng: -93.2650
      }}
      onClick={gotoMPLS}
    />
    <Marker
      position={{
        lat: 46.7867,
        lng: -92.1005
      }}
      onClick={gotoDuluth}
    />
    <Marker
      position={{
        lat: 42.3601,
        lng: -71.0589
      }}
      onClick={gotoBoston}
    />
    <Marker
      position={{
        lat: 40.7128,
        lng: -74.0060
      }}
      onClick={gotoNYC}
    />
    <Marker
      position={{
        lat: 39.9526,
        lng: -75.1652
      }}
      onClick={gotoPhilly}
    />
    <Marker
      position={{
        lat: 38.9072,
        lng: -77.0369
      }}
      onClick={gotoDC}
    />
    <Marker
      position={{
        lat: 36.6512,
        lng: 117.1201
      }}
    />
    <Marker
      position={{
        lat: 31.2304,
        lng: 121.4737
      }}
      onClick={gotoSH}
    />
    <Marker
      position={{
        lat: 22.3193,
        lng: 114.1694
      }}
      onClick={gotoHK}
    />
    <Marker 
      position={{
        lat: 23.1291,
        lng:113.2644
      }}
      onClick={gotogz}
    />
    <Marker 
      position={{
        lat: 28.2282,
        lng:112.9388
      }}
      onClick={gotochangsha}
    />
    <Marker
      position={{
        lat: 29.4316,
        lng:106.9123
      }}
      onClick={gotochongqing}
    />
    <Marker
      position={{
        lat: 39.9042,
        lng:116.4074
      }}
      
    />
      </GoogleMap>
     
    );
}


function gotochongqing() {
    window.location = '/CQ';
}
function gotochangsha() {
    window.location = '/CS';
}
function gotogz() {
    window.location = '/GZ';
}
function gotoHK() {
    window.location = '/HK';
}
function gotoSH() {
    window.location = '/SH';
}
function gotoDC() {
    window.location = '/DC';
}
function gotoPhilly() {
    window.location = '/PY';
}
function gotoNYC() {
    window.location = '/NY';
}
function gotoBoston() {
    window.location = '/BS';
}
function gotoDuluth() {
    window.location = '/Services';
}
function gotoMPLS() {
    window.location = '/Services';
}
function gotoSD() {
    window.location = '/SD';
}
function gotoLA() {
    window.location = '/LA';
}
function gotosf() {
    window.location = '/SF';
}

function gotost() {
    window.location = '/ST';
}
function gotovc() {
    window.location = '/VC';
}
function gotocalg() {
    window.location = '/CG';
}
const MapWrapped = withScriptjs(withGoogleMap(Map));
export default function Maps() {
    return (
      <div style={{ width: "100vw", height: "150vh", background: '#fff' }}>
          <h1>——— Places I visited ———</h1>
          <div className='links'>
          <Link to='/CG#' className='link'>Calgary</Link>
          <Link to='/ST#'className='link'>Seattle</Link>
          <Link to='/VC#'className='link'>Vancouver</Link>
          <Link to='/LA#'className='link'>LA</Link>
          <Link to='/SF#'className='link'>San Francisco</Link>
          <Link to='/SD#'className='link'>San Diego</Link>
          <Link to='/DC#'className='link'>DC</Link>
          <Link to='/NY#'className='link'>NYC</Link>
          <Link to='/BS#'className='link'>Boston</Link>
          <Link to='/PY#'className='link'>Philly</Link>
          <Link to='/SH#'className='link'>Shanghai</Link>
          <Link to='/GZ#'className='link'>GuangZhou</Link>
          <Link to='/CS#'className='link'>Changsha</Link>
          <Link to='/CQ#'className='link'>Chongqing</Link>
          </div>
          <h1>(Click on markers to see albums!)</h1>
          
          
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=`}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '100%',background: '#fff' }} />}
          mapElement={<div style={{margin:'auto', height: '65%', width: "90%" }} />}
        />
        
      </div>
    );
  }