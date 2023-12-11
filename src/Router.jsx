import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
// import Test from './pages/Test';
import Herder from './components/Header/Header';
const Router = () => {
  return (
    <BrowserRouter basename="/goobne">
      <Herder />
      <Routes>{/* <Route path="/" element={<Test />} /> */}</Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
