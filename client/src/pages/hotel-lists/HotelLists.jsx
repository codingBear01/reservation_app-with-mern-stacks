import { useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import useFetch from './../../hooks/useFetch';

import NavBar from '../../components/nav-bar/NavBar';
import Header from '../../components/header/Header';
import SearchItems from './../../components/searchItems/SearchItems';

const HotelLists = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
  );

  const onClickOpenCalendar = useCallback(
    () => setOpenDate((prevDate) => !prevDate),
    []
  );

  const handleSearchBtn = () => reFetch();

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
                  {`${format(dates[0].startDate, 'yyyy/MM/dd')}`} to{' '}
                  {`${format(dates[0].endDate, 'yyyy/MM/dd')}`}
                </span>
                {openDate && (
                  <DateRange
                    onChange={(item) => setDates([item.selection])}
                    minDate={new Date()}
                    ranges={dates}
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
                    <input
                      type="number"
                      onChange={(e) => setMin(e.target.value)}
                      className="lsOptionInput"
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Max price <small>per night</small>
                    </span>
                    <input
                      type="number"
                      onChange={(e) => setMax(e.target.value)}
                      className="lsOptionInput"
                    />
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
              <button onClick={handleSearchBtn}>Search</button>
            </div>

            <div className="listResult">
              {loading ? (
                'Now Loading, Please Wait'
              ) : (
                <>
                  {data.map((item) => (
                    <SearchItems item={item} key={item._id} />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelLists;
