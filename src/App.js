import React, { Component } from 'react'
import Home from './components/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SearchBar from './components/SearchBar'
import './css/Shared.css'
import './css/App.css'

class App extends Component {
  render() {
    return (
        <Router>
          <div className="container">
             <SearchBar />
             <div className="menu">
                  <h1>TC</h1>
              </div> 
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch> 
          </div>
        </Router>
    )
  }
}

export default App;
