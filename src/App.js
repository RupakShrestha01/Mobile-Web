import React from 'react';
import { Nav, Home, Service, Team, Footer, Contact, Chat } from './components';
import { Fade } from 'react-awesome-reveal';
import './index.css';
const App = () => {
  return (
    <div className="background ">
      <Nav />
      <Fade triggerOnce={true} duration={3000}>
        <Home />
      </Fade>
      <Fade triggerOnce={true} duration={3000}>
        <Service />
      </Fade>
      <Fade triggerOnce={true} duration={3000}>
        <Team />
      </Fade>
      <Fade triggerOnce={true} duration={3000}>
        <Contact />
      </Fade>
      <Chat />
      <Footer />
    </div>
  );
};

export default App;
