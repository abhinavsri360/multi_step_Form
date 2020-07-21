import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './navbar'
import Home from './home'

export class header extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route to='/' component={Home} />
          <Redirect to='/' />
        </Switch>
      </div>
    )
  }
}

export default header
