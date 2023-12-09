import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './pages/Test';
import Header from './components/Header/Header';

const Router = () => {
  return (
    <BrowserRouter basename="/goobne">
      <Header />
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
