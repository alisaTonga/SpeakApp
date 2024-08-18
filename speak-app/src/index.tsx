import React from 'react';
import ReactDOM from 'react-dom/client';
import style from './index.module.css'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './components/homePage/HomePage';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // подключаем store к приложению через обертку Provider из react-redux
  
    <HashRouter>
      <Routes>
          {/*<Route path='/' element={<Homepage />} />*/}
          <Route path='*' element={<h1>Error 404 😵</h1>} />
          <Route path='/' element={<Layout/>} >
          <Route path='/' element={<HomePage/>} ></Route>
        </Route>
      </Routes>
    </HashRouter>
);

