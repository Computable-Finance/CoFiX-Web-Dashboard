import loadable from '@loadable/component'
import React from 'react'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Header from 'src/pages/shared/Header'


const Swap = loadable(() => import('./Swap'))
const Pool = loadable(() => import('./Pool'))
const Mining = loadable(() => import('./Mining'))
const ID = loadable(() => import('./ID'))

function App() {
  return (
    <main>
      <Router>
        <Header />

        <Switch>
          <Route path="/swap">
            <Swap />
          </Route>

          <Route path="/pool">
            <Pool />
          </Route>

          <Route path="/mining">
            <Mining />
          </Route>

          <Route path="/id">
            <ID />
          </Route>

          <Redirect to="/swap" />
        </Switch>

      </Router>
    </main>
  )
}

export default App
