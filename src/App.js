import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import HomePage from './Pages/HomePage/HomePage';
import DetailPage from './Pages/DetailPage/DetailPage';
import Layout from './Layout/Layout';
import BookingPage from './Pages/BookingPage/BookingPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import { adminRoutes } from './routes/adminRoutes';
import AdminLayout from './Layout/AdminLayout';
import Spinner from './Components/Spinner/Spinner';

function App() {
  return (

    <div className='min-h-screen'>
      <Spinner />
      <BrowserRouter>
        <Routes>
          {
            adminRoutes.map(({ url, component }) => {
              return <Route path={url} element={component} />
            })
          }
          <Route path='/login' element={<LoginPage />} />
          <Route path='*' element={<Layout Component={NotFoundPage} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
