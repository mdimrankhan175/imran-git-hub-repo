import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import RepositoryList from './components/RepositoryList' // Check the import path
import RepositoryDetail from './components/RepositoryDetail' // Check the import path

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={RepositoryList} />
          <Route path="/repo/:owner/:repo" component={RepositoryDetail} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
