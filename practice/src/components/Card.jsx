import React from 'react';
import '../index.css';

function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <img className="card-img" src="https://imgs.search.brave.com/e-6am5XDGPcK1Q4Yg6YlE71iaRbZ6VeVhFt6mKIMuRA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/d2hhdHMteW91ci1m/YXZvcml0ZS1sdWZm/eS1pbWFnZS12MC1q/b2gxMHgweHdpaWUx/LmpwZWc_YXV0bz13/ZWJwJnM9NDBjZGM1/Y2E1Zjg5YThkNDIy/MTIyOGNmNDRlZjll/MDkyMWNjYjkyYw" alt="luffy" />
      <h2>{props.user}</h2>
      <p>This is my React practice project.</p>
      <button>view details</button>
    </div>
  );
}

export default Card;
