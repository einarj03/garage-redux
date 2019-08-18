import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import Aside from './aside';
import Car from '../components/car';
import { fetchCars } from '../actions';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars(this.props.garage);
  }

  render() {
    if (this.props.cars.length === 0) {
      return [
        <Aside key="aside">
          <Link to="/cars/new">Add a car</Link>
        </Aside>,
        <div className="no-car" key="no-car">No cars yet</div>
      ];
    }
    return [
      <Aside garage={this.props.garage} key="aside">
        <Link to="/cars/new">Add a car</Link>
      </Aside>,
      <div className="list-container" key="list-container">
        {this.props.cars.map(car => <Car car={car} key={car.id} />)}
      </div>
    ];
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCars },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
