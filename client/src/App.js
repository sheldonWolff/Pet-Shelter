import './App.css';
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Display from './components/Display';
import Create from './components/Create';
import DisplayOne from './components/DisplayOne';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Display/>} path='/' default />
          <Route element={<Create/>} path='/add/pet' />
          <Route element={<DisplayOne/>} path='/pet/:id' />
          <Route element={<Edit/>} path='/edit/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
