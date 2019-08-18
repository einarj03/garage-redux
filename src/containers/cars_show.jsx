import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import Aside from './aside';
import { fetchCar } from '../actions';


class CarsShow extends Component {
  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  render() {
    if (!this.props.car) {
      return [
        <Aside key="aside">
          <Link to="/">Back to  List</Link>
        </Aside>,
        <div className="no-car" key="no-car">Loading...</div>
      ];
    }
    const { brand, model, owner, plate } = this.props.car;
    return [
      <Aside key="aside">
        <Link to="/">Back to  List</Link>
      </Aside>,
      <div className="car-container">
        <div className="car-card">
          <img src="../../assets/images/logo_square.svg" alt="" className="car-picture"/>
          <div className="car-details">
            <span>
              <ul>
                <li>{brand} - {model}</li>
              </ul>
            </span>
            <ul>
              <li><strong>Owner: </strong>{owner}</li>
            </ul>
            <span>
              <div className="plate">{plate}</div>
            </span>
          </div>
          <button className="delete">
            <i className="fa fa-trash-o" aria-hidden="true" />
            Delete
          </button>
        </div>
      </div>
    ];
  }
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10);
  const car = state.cars.find(c => c.id === id);
  return { car };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchCar },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
