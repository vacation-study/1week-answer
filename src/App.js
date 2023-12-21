import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './main';
import Assignment from './Assignment';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/assignment" element={<Assignment/>} />
      </Routes>
    </div>
  );
}

export default App;