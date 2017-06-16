import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { locationShape } from 'react-router';

import {Field, reduxForm} from 'redux-form';
import {
  TextField
} from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import {required, password} from '../components/form/validation';
import { login } from '../actions/api';


const mapStateToProps = state => ({
  session: state.session,
});
const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch);

@connect(mapStateToProps, mapDispatchToProps)
@reduxForm({form: 'login-form'})
export default class LoginPage extends Component {
  static defaultProps = {
  }

  static propTypes = {
    location: locationShape.isRequired,
    login: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }

  onSubmit = (data) => {
    const {next = '/'} = this.props.location.query;
    this.props.login(Object.assign({}, data, {next, auth: true}));
  }

  render() {
    const style = {
      margin: 12,
    };
    const {handleSubmit} = this.props;
    // console.log(this.props);
    return (
      <Paper style={{width: '40%', margin: 'auto', padding: '20px'}}>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <Field
              name="user"
              component={TextField}
              hintText="请输入用户名"
              floatingLabelText="用户"
              validate={required}
            />
          </div>
          <div>
            <Field
              name="password"
              component={TextField}
              type="password"
              hintText="请输入密码"
              floatingLabelText="密码"
              validate={password}
            />
          </div>
          <RaisedButton type="submit" primary label="登录" style={style} />
          <RaisedButton href="/regisitered" secondary label="注册" style={style} />
        </form>
      </Paper>
    );
  }
}
