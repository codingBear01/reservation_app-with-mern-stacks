import React, { useState, useCallback, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchContext } from './../../context/SearchContext';
import useFetch from './../../hooks/useFetch';
import NavBar from './../../components/nav-bar/NavBar';
import Header from './../../components/header/Header';
import MailLists from './../../components/mailLists/MailLists';
import Footer from './../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  const { dates, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  const dayDifference = (arrivalDate, departDate) => {
    const timeDiff = Math.abs(arrivalDate.getTime() - departDate.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  };

  const days = dayDifference(dates[0].endDate, dates[0].startDate);

  const [sliderNum, setSliderNum] = useState(0);
  const [openSlider, setOpenSlider] = useState(false);

  const handleOpenSlider = useCallback((i) => {
    setSliderNum(i);
    setOpenSlider(true);
  }, []);

  const handleChangeImg = useCallback(
    (direction) => {
      let newSliderNum;

      if (direction === 'l') {
        newSliderNum = sliderNum === 0 ? data.photos.length - 1 : sliderNum - 1;
      } else {
        newSliderNum = sliderNum === data.photos.length - 1 ? 0 : sliderNum + 1;
      }

      setSliderNum(newSliderNum);
    },
    [sliderNum]
  );

  return (
    <>
      <NavBar />
      <Header type="list" />
      {loading ? (
        'Now Loading, Please Wait'
      ) : (
        <>
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
                    src={data?.photos[sliderNum]}
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
              <h1 className="hotelTitle">{data.name}</h1>
              <div className="hotelAddress">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>{data.address}</span>
              </div>
              <span className="hotelDistance">
                excellent location {data.distance}m from center
              </span>
              <span className="hotelPriceHighlight">
                book a stay over ${data.cheapestPrice} at this property and get
                a free airport taxi
              </span>
              <div className="hotelImgs">
                {data.photos?.map((img, i) => (
                  <div key={i} className="hotelImgWrapper">
                    <img
                      onClick={() => handleOpenSlider(i)}
                      src={img}
                      alt="hotel"
                      className="hotelImg"
                    />
                  </div>
                ))}
              </div>
              <div className="hotelDetails">
                <div className="hotelDetailsTxt">
                  <h1 className="hotelTitle">{data.title}</h1>
                  <p className="hotelDesc">{data.desc}</p>
                </div>
                <div className="hotelDetailsPrice">
                  <h1>Perfect for a {days}-nights stay!</h1>
                  <span>hotel summary</span>
                  <h2>
                    <b>${days * data.cheapestPrice * options.rooms}</b>({days}{' '}
                    nights)
                  </h2>
                  <button>Reserve or Book Now!</button>
                </div>
              </div>
            </div>
            <MailLists />
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default Hotel;
