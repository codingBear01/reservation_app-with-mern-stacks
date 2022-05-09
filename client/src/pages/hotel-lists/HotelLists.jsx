import { useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

import NavBar from '../../components/nav-bar/NavBar';
import Header from '../../components/header/Header';
import SearchItems from './../../components/searchItems/SearchItems';

const HotelLists = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  const onClickOpenCalendar = useCallback(
    () => setOpenDate((prevDate) => !prevDate),
    []
  );

  return (
    <>
      <NavBar />
      <Header type="list" />
      <div className="list">
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className="lsTitle">Search</h1>
              <div className="lsItem">
                <label>Destination</label>
                <input type="text" placeholder={destination} />
              </div>
              <div className="lsItem">
                <label>Check-in-date</label>
                <span onClick={onClickOpenCalendar}>
                  {`${format(date[0].startDate, 'yyyy/MM/dd')}`} to{' '}
                  {`${format(date[0].endDate, 'yyyy/MM/dd')}`}
                </span>
                {openDate && (
                  <DateRange
                    onChange={(item) => setDate([item.selection])}
                    minDate={new Date()}
                    ranges={date}
                  />
                )}
              </div>
              <div className="lsItem">
                <label>Options</label>
                <div className="lsOptions">
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Min price <small>per night</small>
                    </span>
                    <input type="number" className="lsOptionInput" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Max price <small>per night</small>
                    </span>
                    <input type="number" className="lsOptionInput" />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Adults</span>
                    <input
                      type="number"
                      className="lsOptionInput"
                      placeholder={options.adults}
                      min={1}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Children</span>
                    <input
                      type="number"
                      className="lsOptionInput"
                      placeholder={options.children}
                      min={0}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Rooms</span>
                    <input
                      type="number"
                      className="lsOptionInput"
                      placeholder={options.rooms}
                      min={1}
                    />
                  </div>
                </div>
              </div>
              <button>Search</button>
            </div>

            <div className="listResult">
              <SearchItems />
              <SearchItems />
              <SearchItems />
              <SearchItems />
              <SearchItems />
              <SearchItems />
              <SearchItems />
              <SearchItems />
              <SearchItems />
              <SearchItems />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelLists;
