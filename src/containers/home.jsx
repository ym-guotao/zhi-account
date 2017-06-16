import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getMessage, logout} from '../actions/api';
import Hello from '../components/hello';
import {selectUser, selectMsg} from '../selectors';


const mapStateToProps = state => ({
  user: selectUser(state) || 'anonymous',
  message: selectMsg(state) || 'fetching...',
});
const mapDispatchToProps = dispatch => bindActionCreators(
  {getMessage, logout},
  dispatch
);

@connect(mapStateToProps, mapDispatchToProps)
export default class HomePage extends Component {
  static defaultProps = {
  }

  static propTypes = {
    getMessage: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
  }

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.getMessage();
    }, 2000);
  }

  onClick() {
    this.props.logout();
  }

  render() {
    return (
      <div>
        <Hello msg={this.props.message} user={this.props.user} />
        <button onClick={this.onClick}>
          Logout
        </button>
      </div>
    );
  }
}
