import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

import Nav from './Nav'
import Search from './Search'
import Words from './Words'

const App = () => {
  return (
    <Router>
      <div className='app-container container'>
        <div className='row'>
          <div className='twelve columns'>
            <Nav />
          </div>
        </div>
        <div className='row'>
          <div className='twelve columns'>
            <Route exact path='/' component={Search} />
          </div>
        </div>
        <div className='row'>
          <div className='twelve columns'>
            <Route exact path='/search' component={Search} />
          </div>
        </div>
        <div className='row'>
          <div className='twelve columns'>
            <Route exact path='/dictionary' component={Words} />
          </div>
        </div>
      </div>
    </Router>
    )
}

export default App
