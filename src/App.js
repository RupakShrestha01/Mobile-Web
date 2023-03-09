import React from 'react';
import {
  Nav,
  Home,
  Service,
  Footer,
  Contact,
  Chat,
  Testimonial,
  Product,
} from './components';
import './index.css';
const App = () => {
  return (
    <div className="background">
      <Nav />
      <Home />
      <Product />
      <Service />
      <Testimonial />
      <Contact />
      <Chat />
      <Footer />
    </div>
  );
};

export default App;
