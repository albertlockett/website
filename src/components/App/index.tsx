import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from '../HomePage'
import CVPage from '../CVPage'

import './styles.scss'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cv">
          <CVPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  )
}