import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import BaseJoin from './pages/BaseJoin/BaseJoin';
import Join from './pages/Join/Join';
import Delivery from './pages/Delivery/Delivery';
import Cart from './pages/Cart/Cart';
import List from './pages/List/List';
import Order from './pages/Order/Order';
import Main from './pages/Main/Main';
import ScrollToTop from './components/ScrollTop/ScrollTop';

const Router = () => {
  return (
    <BrowserRouter basename="/goobne">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/basejoin" element={<BaseJoin />} />
        <Route path="/join" element={<Join />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/list" element={<List />} />
        <Route path="/order" element={<Order />} />
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
