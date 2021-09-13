import loadable from '@loadable/component'
import React from 'react'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Header from 'src/pages/shared/Header'


const Swap = loadable(() => import('./Swap'))
const Pool = loadable(() => import('./Pool'))
const Mining = loadable(() => import('./Mining'))
const ID = loadable(() => import('./ID'))
const Index = loadable(() => import('./Index'))

function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Index />
          </Route>

          <Route path="/swap">
            <Header />
            <Swap />
          </Route>

          <Route path="/pool">
            <Header />
            <Pool />
          </Route>

          <Route path="/mining">
            <Header />
            <Mining />
          </Route>

          <Route path="/id">
            <Header />
            <ID />
          </Route>

          <Redirect to="/" />
        </Switch>

      </Router>
    </main>
  )
}

export default App
