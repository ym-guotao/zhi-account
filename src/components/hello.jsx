import React from 'react';
import PropTypes from 'prop-types';
import logo from '../logo.svg';
import './hello.scss';


export default function HelloWorld(props) {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{props.email}</h2>
        <h2>{props.msg}</h2>
      </div>
    </div>
  );
}

HelloWorld.propTypes = {
  msg: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};
