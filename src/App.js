import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import HomePage from './Pages/HomePage/HomePage';
import DetailPage from './Pages/DetailPage/DetailPage';
import Layout from './Layout/Layout';
import BookingPage from './Pages/BookingPage/BookingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout Component={HomePage} />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/detail/:idPhim' element={<Layout Component={DetailPage} />} />
        <Route path='/booking/:id' element={<Layout Component={BookingPage} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
