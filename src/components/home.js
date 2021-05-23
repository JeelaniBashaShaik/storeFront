import React from 'react';
import Counter from './../containers/counter';
import LoginPage from './../containers/login';

export const Home = () => {
  return (
    <React.Fragment>
      <Counter />
      <LoginPage />
    </React.Fragment>
  );
};
