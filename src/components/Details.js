import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { city } from './Homepage';

const Details = () => {
  const forecast = useSelector((state) => state.details);
  console.log('====++++++++++++++===');
  console.log(forecast);
  console.log(forecast.data[0]);
  console.log(forecast.data[1]);
  console.log(city);

  return (
    <div className="details-square">
      <div>
        <Link className="link" to="/">← Back</Link>
        <h4>{city}</h4>
      </div>
      <br />
      <br />
      <div>
        <p>{forecast.data[0]}</p>
        <p>{forecast.data[1]}</p>
      </div>
    </div>
  );
};

export default Details;
