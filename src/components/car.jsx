import React from 'react';
import { Link } from 'react-router-dom';

const Car = ({ car }) => {
  const { brand, model, owner, plate, id } = car;
  return (
    <div className="car-smallad">
      <img src="../../assets/images/logo_square.svg" alt="" className="car-logo" />
      <div className="car-details">
        <span>
          <ul>
            <li>{brand} - {model}</li>
          </ul>
        </span>
        <ul>
          <li><strong>Owner: </strong>{owner}</li>
        </ul>
      </div>
      <Link to={`/cars/${id}`} />
    </div>
  );
};

export default Car;
