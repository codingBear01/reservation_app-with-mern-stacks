import React from 'react';
import NavBar from './../../components/nav-bar/NavBar';
import Header from './../../components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import MailLists from './../../components/mailLists/MailLists';
import Footer from './../../components/footer/Footer';

const Hotel = () => {
  const imgs = [
    {
      src: 'https://pix10.agoda.net/hotelImages/2962286/-1/16d4e517a27fb6c76de2cd9e65e9c3ed.jpg?ca=6&ce=1&s=1024x768',
    },
    {
      src: 'https://pix10.agoda.net/hotelImages/2962286/-1/16d4e517a27fb6c76de2cd9e65e9c3ed.jpg?ca=6&ce=1&s=1024x768',
    },
    {
      src: 'https://pix10.agoda.net/hotelImages/2962286/-1/16d4e517a27fb6c76de2cd9e65e9c3ed.jpg?ca=6&ce=1&s=1024x768',
    },
    {
      src: 'https://pix10.agoda.net/hotelImages/2962286/-1/16d4e517a27fb6c76de2cd9e65e9c3ed.jpg?ca=6&ce=1&s=1024x768',
    },
    {
      src: 'https://pix10.agoda.net/hotelImages/2962286/-1/16d4e517a27fb6c76de2cd9e65e9c3ed.jpg?ca=6&ce=1&s=1024x768',
    },
    {
      src: 'https://pix10.agoda.net/hotelImages/2962286/-1/16d4e517a27fb6c76de2cd9e65e9c3ed.jpg?ca=6&ce=1&s=1024x768',
    },
  ];
  return (
    <>
      <NavBar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="slider"></div>
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Gwangali</span>
          </div>
          <span className="hotelDistance">
            excellent location -500m from center
          </span>
          <span className="hotelPriceHighlight">
            book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImgs">
            {imgs.map((img, i) => (
              <div key={i} className="hotelImgWrapper">
                <img src={img.src} alt="hotel" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTxt">
              <h1 className="hotalTitle">HOTEL</h1>
              <p className="hotelDesc">
                설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다설명이다
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>price title</h1>
              <span>hotel summary</span>
              <h2>
                <b>$900</b>(9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailLists />
        <Footer />
      </div>
    </>
  );
};

export default Hotel;
