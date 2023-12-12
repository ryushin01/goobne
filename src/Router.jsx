import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Order from './Delivery/Delivery';

const Router = () => {
  return (
    <BrowserRouter basename="/goobne">
      <Routes>
        {/* {<Route path="/" element={<Login />} />} */}
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
