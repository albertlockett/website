import React, { ReactElement } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from '../HomePage'
import ContactPage from '../ContactPage'
import CVPage from '../CVPage'
import LinksPage from '../LinksPage'

import './styles.scss'

export default function App(): ReactElement {
  return (
    <Router>
      <Switch>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/cv">
          <CVPage />
        </Route>
        <Route path="/links">
          <LinksPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  )
}