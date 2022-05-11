import { useState, useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faPlane,
  faCar,
  faLocationDot,
  faTaxi,
  faCalendarDays,
  faPerson,
} from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from './../../context/compare';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Header = ({ type }) => {
  const [destination, setDestination] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const navigate = useNavigate();

  const { dispatch } = useContext(SearchContext);
  const { user } = useContext(AuthContext);

  const onClickOpenCalendar = useCallback(
    () => setOpenDate((prevDate) => !prevDate),
    []
  );

  const onClickOpenOptions = useCallback(
    () => setOpenOptions((prevOptions) => !prevOptions),
    []
  );

  const onChangeDestination = (e) => setDestination(e.target.value);

  const handleOptions = useCallback((name, operation) => {
    setOptions((prevOptions) => {
      return {
        ...prevOptions,
        [name]:
          operation === 'inc' ? prevOptions[name] + 1 : prevOptions[name] - 1,
      };
    });
  }, []);

  const handleSearch = () => {
    dispatch({ type: 'NEW_SEARCH', payload: { destination, dates, options } });
    navigate('hotel-lists', { state: { destination, dates, options } });
  };

  return (
    <>
      <div className="header">
        <div
          className={
            type === 'list' ? 'headerContainer listMode' : 'headerContainer'
          }
        >
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>stays</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div>
          </div>

          {type !== 'list' && (
            <>
              <h1 className="headerTitle">
                A lifetime of discounts? It's Genius.
              </h1>
              <p className="headerDesc">
                Get rewarded for your travels – unlock instant savings of 10% or
                more with a free Lamabooking account
              </p>
              {!user && <button className="headerBtn">Sign in / Register</button>}

              <div className="headerSearch">
                <div className="headerSearchItem">
                  <FontAwesomeIcon className="headerIcon" icon={faBed} />
                  <input
                    type="text"
                    className="headerSearchInput"
                    placeholder="Where are you going?"
                    onChange={onChangeDestination}
                  />
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon
                    className="headerIcon"
                    icon={faCalendarDays}
                  />
                  <span
                    onClick={onClickOpenCalendar}
                    className="headerSearchTxt"
                  >
                    {`${format(dates[0].startDate, 'yyyy/MM/dd')}`} to{' '}
                    {`${format(dates[0].endDate, 'yyyy/MM/dd')}`}
                  </span>
                  {openDate && (
                    <DateRange
                      className="date"
                      onChange={(item) => setDates([item.selection])}
                      minDate={new Date()}
                      ranges={dates}
                      editableDateInputs={true}
                      moveRangeOnFirstSelection={false}
                    />
                  )}
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon className="headerIcon" icon={faPerson} />
                  <span
                    onClick={onClickOpenOptions}
                    className="headerSearchTxt"
                  >
                    {`${options.adults} adults |
              ${options.children} children |
              ${options.rooms} rooms
              `}
                  </span>

                  {openOptions && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionTxt">Adults</span>
                        <div className="optionCnt">
                          <button
                            disabled={options.adults <= 1}
                            className="optionCntBtn"
                            onClick={() => handleOptions('adults', 'dec')}
                          >
                            -
                          </button>
                          <span className="optionNum">{options.adults}</span>
                          <button
                            className="optionCntBtn"
                            onClick={() => handleOptions('adults', 'inc')}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionTxt">Children</span>
                        <div className="optionCnt">
                          <button
                            disabled={options.children <= 0}
                            className="optionCntBtn"
                            onClick={() => handleOptions('children', 'dec')}
                          >
                            -
                          </button>
                          <span className="optionNum">{options.children}</span>
                          <button
                            className="optionCntBtn"
                            onClick={() => handleOptions('children', 'inc')}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionTxt">Rooms</span>
                        <div className="optionCnt">
                          <button
                            disabled={options.rooms <= 1}
                            className="optionCntBtn"
                            onClick={() => handleOptions('rooms', 'dec')}
                          >
                            -
                          </button>
                          <span className="optionNum">{options.rooms}</span>
                          <button
                            className="optionCntBtn"
                            onClick={() => handleOptions('rooms', 'inc')}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="headerSearchItem">
                  <button className="headerBtn" onClick={handleSearch}>
                    Search
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
