import React from 'react'

import { Route, Redirect } from 'react-router-dom'

import { isLogged } from 'components/auth'

const PublicRoute = ({ component: Component, permission, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isLogged() ? (
          <Component {...props} /> // Go to component if not logged
        ) : (<Redirect to={{ pathname: '/dashboard', state: { from: props.location } }} />)} // Redirect to inner system if logged.
    />
  )
}

export default PublicRoute
