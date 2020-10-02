import React from 'react'
import { Switch } from 'react-router-dom'

import { PrivateRoute } from 'components/router'
import MainPage from './mainPage'

const Routes = () => (
  <Switch>
    <PrivateRoute path='/private' component={MainPage} />
  </Switch>
)

export default Routes
