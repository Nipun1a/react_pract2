import React from 'react';
import '../index.css';

function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <img className="card-img" src={props.image} alt={props.user} />
      <h2>{props.user}</h2>
      <p>{props.des}</p>
      <button>view details</button>
    </div>
  );
}

export default Card;
