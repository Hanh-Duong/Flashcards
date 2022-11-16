import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Lessons from './components/Lessons';
import Menu from './components/Menu';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Lessons />}
        />
        <Menu />
        <Home />
      </Routes>
    </BrowserRouter>
  );
}

