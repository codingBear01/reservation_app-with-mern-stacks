import React, { useState, useCallback } from 'react';
import NavBar from './../../components/nav-bar/NavBar';
import Header from './../../components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import MailLists from './../../components/mailLists/MailLists';
import Footer from './../../components/footer/Footer';

const Hotel = () => {
  const [sliderNum, setSliderNum] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);
  const imgs = [
    {
      src: 'https://i0.wp.com/blog.allstay.com/wp-content/uploads/2021/02/7-10.jpg?resize=740%2C505&ssl=1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max500/117339302.jpg?k=cafe09480cfc29272d206599c864892970ee7ef8b1b737505baafcb7e18511f2&o=&hp=1',
    },
    {
      src: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1jPF/image/s5peAAk69VagVdOLjikjeD2ial0.png',
    },
    {
      src: 'https://pix10.agoda.net/hotelImages/2962286/-1/16d4e517a27fb6c76de2cd9e65e9c3ed.jpg?ca=6&ce=1&s=1024x768',
    },
    {
      src: 'https://pix10.agoda.net/hotelImages/296/2962286/2962286_17110308130058663940.jpg?ca=13&ce=1&s=1024x768',
    },
    {
      src: 'https://image.goodchoice.kr/resize_490x348/affiliate/2020/11/12/5facd1c4769bd.jpg',
    },
  ];

  const handleOpenSlider = useCallback((i) => {
    setSliderNum(i);
    setOpenSlider(true);
  }, []);

  const handleChangeImg = useCallback(
    (direction) => {
      let newSliderNum;

      if (direction === 'l') {
        newSliderNum = sliderNum === 0 ? imgs.length - 1 : sliderNum - 1;
      } else {
        newSliderNum = sliderNum === imgs.length - 1 ? 0 : sliderNum + 1;
      }

      console.log(newSliderNum);

      setSliderNum(newSliderNum);
    },
    [imgs.length, sliderNum]
  );

  return (
    <>
      <NavBar />
      <Header type="list" />
      <div className="hotelContainer">
        {openSlider && (
          <div className="slider">
            <FontAwesomeIcon
              className="closeIcon"
              icon={faCircleXmark}
              onClick={() => setOpenSlider(false)}
            />
            <FontAwesomeIcon
              className="arrow"
              icon={faCircleArrowLeft}
              onClick={() => handleChangeImg('l')}
            />
            <div className="sliderWrapper">
              <img
                src={imgs[sliderNum].src}
                alt="slider-img"
                className="sliderImg"
              />
            </div>
            <FontAwesomeIcon
              className="arrow"
              icon={faCircleArrowRight}
              onClick={() => handleChangeImg('r')}
            />
          </div>
        )}
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
                <img
                  onClick={() => handleOpenSlider(i)}
                  src={img.src}
                  alt="hotel"
                  className="hotelImg"
                />
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
