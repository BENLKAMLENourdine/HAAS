import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const ErrorMessage = ({ error }) => (
  <Fragment>
    {error.message && <div className="error"><strong>{error.message.message}</strong></div>}
  </Fragment>
);

export default connect(store => ({ error: store.error }))(ErrorMessage);
