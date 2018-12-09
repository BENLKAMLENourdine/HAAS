import React from 'react';
import { Redirect } from 'react-router-dom';

import CreateHash from '../components/CreateHash';
import ErrorMessage from '../components/ErrorMessage';
import Hash from '../components/Hash';

const HomePage = ({ isAuthenticated }) => {
  if (!isAuthenticated) return <Redirect to="/login" />;

  return (
    <div>
    <Hash />
    <CreateHash />
    <ErrorMessage />
    </div>
  );
};

export default HomePage;