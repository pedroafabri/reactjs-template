import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MainPage from './mainPage'

const Routes = () => (
  <Switch>
    <Route path='/' component={MainPage} />
  </Switch>
)

export default Routes
