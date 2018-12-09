import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const Hash = ({ hash }) => (
  <Fragment>
    {hash.hash && <div className="form-input hash">This is your hash: <strong>{hash.hash}</strong></div>}
  </Fragment>
);

export default connect(store => ({ hash: store.currentHash }))(Hash);
