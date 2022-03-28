import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Header from './compornents/Header';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Works from './pages/Works';
import './css/App.scss';
import './css/layout/_main.scss';

function App() {
  return (
    <div className='App'>
      <Header />

      <main className='main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/works" element={<Works />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
