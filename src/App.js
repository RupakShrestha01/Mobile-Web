import React from 'react';
import { Nav, Home, Service, Team, Footer, Contact } from './components';
import './index.css';
const App = () => {
  return (
    <div className="background ">
      <Nav />
      <Home />
      <Service />
      <Team />

      <Contact />
      <Footer />
    </div>
  );
};

export default App;
