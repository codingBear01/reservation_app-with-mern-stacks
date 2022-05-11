import { useState, useContext } from 'react';
import axios from 'axios';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFetch from './../../hooks/useFetch';
import { SearchContext } from './../../context/SearchContext';
import { useNavigate } from 'react-router-dom';

const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  const { dates } = useContext(SearchContext);
  const navigate = useNavigate();

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);
  const isAvailable = (roomNum) => {
    const isFound = roomNum.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleRoomSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const handleReserve = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: allDates,
          });
          return res.data;
        })
      );
      setOpen(false);
    } catch (err) {}
  };

  return (
    <>
      <div className="reserve">
        <div className="rContainer">
          <FontAwesomeIcon
            className="rClose"
            icon={faCircleXmark}
            onClick={() => setOpen(false)}
          />
          <span>Select your rooms:</span>
          {data.map((item) => (
            <div key={item._id} className="rItem">
              <div className="rItemInfo">
                <div className="rTitle">{item.title}</div>
                <div className="rDesc">{item.desc}</div>
                <div className="rMax">
                  Max people: <b>{item.maxPeople}</b>
                </div>
                <div className="rPrice">${item.price}</div>
              </div>
              <div className="rSelectRooms">
                {item.roomNumbers.map((roomNum) => (
                  <div key={roomNum._id} className="room">
                    <label>{roomNum.number}</label>
                    <input
                      type="checkbox"
                      value={roomNum._id}
                      onChange={handleRoomSelect}
                      disabled={!isAvailable(roomNum)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button onClick={handleReserve} className="rButton">
            RESERVE NOW!
          </button>
        </div>
      </div>
    </>
  );
};

export default Reserve;
