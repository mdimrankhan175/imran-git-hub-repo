import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import RepositoryList from './components/RepositoryList'
import RepositoryDetail from './components/RepositoryDetail'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={RepositoryList} />
          <Route path="/repo/:owner/:name" component={RepositoryDetail} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
