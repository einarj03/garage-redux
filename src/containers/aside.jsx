import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Aside extends Component {
  render() {
    const style = {
      backgroundImage: `url("../../assets/images/mechanic.jpg")`
    };

    return (
      <div className="aside">
        <div className="illustration" style={style} />
        <img src="../../assets/images/logo.svg" alt="logo" className="logo" />
        <h1>Garage {this.props.garage}</h1>
        <p>Our garage is the best. Reasonable prices, always on time, we are the best (and fictionnal).</p>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default connect(mapStateToProps)(Aside);
