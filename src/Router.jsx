import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
// import Test from './pages/Test';
import Herder from './components/Header/Header';
import Order from './pages/Order';
const Router = () => {
  return (
    <BrowserRouter basename="/goobne">
      <Herder />
      <Routes>
        {/* <Route path="/" element={<Test />} /> */}
        {<Route path="/order" element={<Order />} />}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
