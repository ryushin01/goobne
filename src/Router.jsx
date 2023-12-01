import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter basename="/goobne">
      <Routes>{/* <Route path="/" element={<Login />} /> */}</Routes>
    </BrowserRouter>
  );
};

export default Router;
