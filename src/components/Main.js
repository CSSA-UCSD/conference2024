// https://stackoverflow.com/questions/41956465/how-to-create-multiple-page-app-using-react

import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Speakers from './pages/Speakers';
import Register from './pages/Register';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/schedule' element={<Schedule/>}></Route>
      <Route exact path='/speakers' element={<Speakers/>}></Route>
      <Route exact path='/register' element={<Register/>}></Route>
    </Routes>
  );
}

export default Main;