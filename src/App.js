import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Nav, Footer, Chat } from './components';
import { Keyrings, Case, Frame } from './pages';
import './index.css';
import Main from './Main';

const App = () => {
  return (
    <div className="background">
      <Nav />

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/product/case" element={<Case />} />
        <Route path="/product/keyring" element={<Keyrings />} />
        <Route path="/product/frame" element={<Frame />} />
      </Routes>
      <Chat />
      <Footer />
    </div>
  );
};

export default App;
