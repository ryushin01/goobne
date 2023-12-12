import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Test from './pages/Test';

const Router = () => {
  return (
    <BrowserRouter basename="/goobne">
      <Routes>
        {/* {<Route path="/" element={<Login />} />} */}

        {<Route path="/" element={<Test />} />}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
