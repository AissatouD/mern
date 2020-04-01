/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import Fish from '../Fish/Fish';
import './Home.scss';

const Home = () => {
  const [fishes, setFishes] = useState({});



  useEffect(() => {
    fetch('http://localhost:3003/fish')
      .then(response => response.json())
      .then(responseData => {
        setFishes(responseData);
      })
      .catch(error => console.warn(error));
  }, [fishes]);

  return (
    <div className='menu'>
      <h1>Fishes</h1>
      <ul>
        {Object.keys(fishes).map(key => (
          <Fish key={key} index={key} details={fishes[key]} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
