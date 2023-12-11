import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

const Router = () => {
  return (
    <BrowserRouter basename="/goobne">
      <Routes>{/* {<Route path="/" element={<Login />} />} */}</Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
