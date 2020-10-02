import React from 'react'

import { Route, Redirect } from 'react-router-dom'

import { isLogged } from 'components/auth'

const PrivateRoute = ({ component: Component, permission, ...rest }) => {
  const scopes = [] // Retrieve permissions here

  const hasPermission = (scope) => isLogged() && (!scope || scopes.includes(scope)) // Private route can have no scope

  return (
    <Route
      {...rest}
      render={(props) =>
        hasPermission(permission)
          ? (<Component {...props} />)
          : (<Redirect to={{ pathname: '/', state: { from: props.location } }} />)}
    />
  )
}

export default PrivateRoute
