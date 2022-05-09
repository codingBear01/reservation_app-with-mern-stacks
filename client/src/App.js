import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import HotelLists from './pages/hotel-lists/HotelLists';
import Hotel from './pages/hotel/Hotel';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel-lists" element={<HotelLists />} />
        <Route path="/hotel-lists/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
