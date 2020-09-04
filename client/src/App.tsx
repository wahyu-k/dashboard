import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route link="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
