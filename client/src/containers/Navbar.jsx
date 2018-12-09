import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import profile from '../profile.svg';

import { logout } from '../store/actions';

const Navbar = ({ auth, logout }) => (
  <nav className="navbar">
    <div className="container">
      <ul className="navbar-container">
        <li>
          <Link className="navbar-brand" to="/">
            <img src={logo} width="134" height="40" />
          </Link>
        </li>
        {auth.isAuthenticated && (
          <Fragment>
            <li>
              <a className="navbar-item right">
              <img src={profile} width="20" height="20" /> {auth.user.username}
              </a>
            </li>
            <li>
              <a className="navbar-item logout" onClick={logout}>
                Disconnect
              </a>
            </li>
          </Fragment>
        )}
      </ul>
    </div>
  </nav>
);

export default connect(
  store => ({
    auth: store.auth,
  }),
  { logout },
)(Navbar);