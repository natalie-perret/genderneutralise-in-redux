import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

import Nav from './Nav'
import SearchBox from './SearchBox'
import Words from './Words'
import About from './About'

const App = () => {
  return (
    <Router>
      <div className='app-container container'>
        <Nav />
          <Route exact path='/' component={SearchBox} />
          <Route exact path='/about' component={About} />
          <Route exact path='/search' component={SearchBox} />
          <Route exact path='/dictionary' component={Words} />
      </div>
    </Router>
    )
}

export default App
