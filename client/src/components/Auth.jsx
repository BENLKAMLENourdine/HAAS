import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authUser, logout } from '../store/actions';
import { Link } from 'react-router-dom';


class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    const { username, password } = this.state;
    const { authType } = this.props;
    e.preventDefault();
    this.props.authUser(authType || 'login', { username, password });
  }

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
        {this.props.authType == 'register' && <div className="center">
            <h2 className="heading">Create an account</h2>
            <p className="small-heading">Use the form below to create an account</p>
          </div>}
          {this.props.authType == 'login' && <div className="center">
            <h2 className="heading">Sign in</h2>
            <p className="small-heading">Welcome back</p>
          </div>}
          <label className="small-heading" htmlFor="username">
            Username *
          </label>
          <input
            type="text"
            placeholder="Jane Doe"
            value={username}
            name="username"
            onChange={this.handleChange}
            autoComplete="off"
            className="form-input"
          />
          <label className="small-heading" for="password">
            Password *
          </label>
          <input
            type="password"
            placeholder="Password (at least 6 chars)"
            value={password}
            name="password"
            onChange={this.handleChange}
            autoComplete="off"
            className="form-input"
          />
          {this.props.authType == 'register' && <div className="center">
            <button className="button" type="submit">
              Create an account
            </button>
            <div>
              <p>Already have an account? <span className="blue">
              <Link to="/login">Sign In</Link></span></p>
            </div>
          </div>}
          {this.props.authType == 'login' &&
            <div className="center">
              <button className="button" type="submit">
                Login
              </button>
              <div>
              <p>Don't have an account? <span className="blue">
              <Link to="/register">Get Started</Link></span></p>
            </div>
            </div>}
        </form>
      </div>
    );
  }
}

export default connect(() => ({}), { authUser, logout })(Auth);