import React from 'react';
import Card from './components/Card.jsx';
import './index.css';
import Navbar from './components/Navbar.jsx';
// ✅ Import images from src
import yug from './components/yug.jpg';
import nipun from './components/nipun.jpg';

const App = () => {
  // <> </> React Fragment — used to avoid unnecessary div wrappers
  return (
    <>
      <div>
        <Navbar />
        <h1>Hello, Buddy!</h1>
        <Card user = "yug" des = "This is my React practice project." image = {yug} />
        <Card user = "luffy" des = "This is my first  project." image = "https://imgs.search.brave.com/e-6am5XDGPcK1Q4Yg6YlE71iaRbZ6VeVhFt6mKIMuRA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/d2hhdHMteW91ci1m/YXZvcml0ZS1sdWZm/eS1pbWFnZS12MC1q/b2gxMHgweHdpaWUx/LmpwZWc_YXV0bz13/ZWJwJnM9NDBjZGM1/Y2E1Zjg5YThkNDIy/MTIyOGNmNDRlZjll/MDkyMWNjYjkyYw" />
        <Card user = "nipun" des = "This is my best project." image = {nipun} />
      </div>
    </>
  );
};

export default App;
