import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Delivery from './pages/Delivery/Delivery';

const Router = () => {
  return (
    <BrowserRouter basename="/goobne">
      <Routes>
        {/* {<Route path="/" element={<Login />} />} */}
        <Route path="/delivery" element={<Delivery />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
