import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './components/GlobalStyle';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Store from './Pages/Store';
import Navbar from './components/Navbar';
import About from './Pages/About'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path='/' element={<Navigate to='/plantas' />} />
        <Route path='plantas' element={<Store />} />
        <Route path='cactos' element={<Store />} />
        <Route path='vasos' element={<Store />} />
        <Route path='diversos' element={<Store />} />
        <Route path='sobre' element={<About />} />
      </Routes >
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);