import loadable from '@loadable/component'
import React from 'react'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Header from 'src/pages/shared/Header'

const Swap = loadable(() => import('./Swap'))
const Pool = loadable(() => import('./Pool'))
const Mining = loadable(() => import('./Mining'))
const User = loadable(() => import('./User'))

function App() {
  return (
    <main>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/pool">
            <Pool />
          </Route>

          <Route exact path="/mining">
            <Mining />
          </Route>

          <Route exact path="/user">
            <User />
          </Route>

          <Route exact path="/swap">
            <Swap />
          </Route>

          <Redirect to="/pool" />
        </Switch>
      </Router>
    </main>
  )
}

export default App
