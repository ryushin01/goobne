import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter basename="/goobne">
      <Routes>{/* <Route path="/" element={<Test />} /> */}</Routes>
    </BrowserRouter>
  );
};

export default Router;
