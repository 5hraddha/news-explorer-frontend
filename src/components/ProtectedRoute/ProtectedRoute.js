import React  from 'react';
import {
  Route,
  Redirect
}             from 'react-router-dom';

function ProtectedRoute({children, isLoggedIn, ...restProps}) {
  return (
    <Route {...restProps}>
      {
        isLoggedIn
        ? children
        : <Redirect to="/" />
      }
    </Route>
  );
}

export default ProtectedRoute;
