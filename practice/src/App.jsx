import React from 'react';
import Card from './components/Card.jsx';
import './index.css';
import Navbar from './components/Navbar.jsx';

const App = () => {
  // <> </> React Fragment — used to avoid unnecessary div wrappers
  return (
    <>
      <div>
        <Navbar />
        <h1>Hello, Buddy!</h1>
        <Card />
        <Card />
      </div>
    </>
  );
};

export default App;
