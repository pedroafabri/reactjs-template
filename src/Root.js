import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

// import { PublicRoute } from './components/router/PublicRoute'
import PublicArea from 'pages/public'
import AdminArea from 'pages/admin'
import PrivateArea from 'pages/private'

const Root = () => (
  <BrowserRouter>
    <Switch>
      {/* <PublicRoute exact path='/' component={LoginPage}/> --> If trying to login when already logged, redirect */}
      <Route exact path='/' component={PublicArea} />
      <Route exact path='/admin' component={AdminArea} />
      <Route exact path='/private' component={PrivateArea} />
    </Switch>
  </BrowserRouter>
)

export default Root
