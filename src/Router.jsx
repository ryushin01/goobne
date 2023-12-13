import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import BaseJoin from './pages/BaseJoin/BaseJoin';
import Delivery from './pages/Delivery/Delivery';

const Router = () => {
  return (
    <BrowserRouter basename="/goobne">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/basejoin" element={<BaseJoin />} />
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
