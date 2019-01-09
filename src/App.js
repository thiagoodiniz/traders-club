import React, { Component } from 'react'
import Home from './components/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SearchBar from './components/SearchBar'
import Form from './components/Form'
import SideMenu from './components/SideMenu'
import './css/Shared.css'
import './css/App.css'

class App extends Component {
  render() {
    return (
        <Router>
          <div className="container">
             <SearchBar formLink="/form" />
             <SideMenu link="/" />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/form" component={Form} />
            </Switch> 
          </div>
        </Router>
    )
  }
}

export default App;
