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
        <Card user = "yug"/>
        <Card user = "luffy" />
        <Card user = "nipun" />
      </div>
    </>
  );
};

export default App;
