import React from 'react';
import { Nav, Home, Service, Team, Footer, Contact } from './components';
import { Fade } from 'react-awesome-reveal';
import './index.css';
const App = () => {
  return (
    <div className="background ">
      <Nav />
      <Fade duration={3000}>
        <Home />
      </Fade>
      <Fade duration={3000}>
        <Service />
      </Fade>
      <Fade duration={3000}>
        <Team />
      </Fade>
      <Fade duration={3000}>
        <Contact />
      </Fade>

      <Footer />
    </div>
  );
};

export default App;
