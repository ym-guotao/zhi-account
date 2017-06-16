import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {
  TextField
} from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import {regisitered} from '../actions/api';
import {required, email, password} from '../components/form/validation';


const mapStateToProps = state => ({
  session: state.session,
});
const mapDispatchToProps = dispatch => bindActionCreators({ regisitered }, dispatch);

@connect(mapStateToProps, mapDispatchToProps)
@reduxForm({form: 'regisitered-form'})
export default class RegisteredPage extends Component {
  static defaultProps = {
  }

  static propTypes = {
    regisitered: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    this.props.regisitered(Object.assign({}, data, {auth: true}));
  }

  render() {
    const style = {
      margin: 12,
    };
    const fieldStyle = {
      width: '100%',
    };
    const {handleSubmit} = this.props;
    return (
      <Paper style={{width: '60%', margin: 'auto', padding: '20px'}}>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <Field
              name="user"
              component={TextField}
              hintText="请输入用户名"
              floatingLabelText="用户"
              validate={required}
              style={fieldStyle}
            />
          </div>
          <div>
            <Field
              name="email"
              component={TextField}
              hintText="请输入email"
              floatingLabelText="Email"
              validate={email}
              style={fieldStyle}
            />
          </div>
          <div>
            <Field
              name="password"
              component={TextField}
              hintText="请输入密码"
              floatingLabelText="密码"
              validate={password}
              style={fieldStyle}
              type="password"
            />
          </div>
          <RaisedButton type="submit" primary label="注册" style={style} />
          <RaisedButton href="/login" secondary label="登录" style={style} />
        </form>
      </Paper>
    );
  }
}
