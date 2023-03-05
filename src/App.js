import React from 'react';
import { Nav, Home, Service, Team, Footer, Faq } from './components';
const App = () => {
  return (
    <div className="background">
      <Nav />
      <Home />
      <Service />
      <Team />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
