import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Calc from './Routes/Calc';
import Quote from './Routes/Quote';
import UiLayout from './Components/UiLayout';
import NotMatch from './Routes/error-page';

const App = () => (
  <Routes>
    <Route path="/" element={<UiLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calc />} />
      <Route path="/quotes" element={<Quote />} />
      <Route path="*" element={<NotMatch />} />
    </Route>
  </Routes>
);

export default App;
