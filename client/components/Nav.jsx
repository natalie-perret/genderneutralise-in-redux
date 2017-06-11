import React from 'react'
import {Link} from 'react-router-dom'


const Nav = () => {
  return (
    <div className="row">
      <div className="six columns">
        <div className="logo">
          <Link to={'/'}>gender.neutralise</Link>
        </div>
      </div>
      <div className="six columns">
        <div className="options">
          <Link to={'/about'}>about</Link>
          <Link to={'/search'}>search</Link>
          <Link to={'/dictionary'}>dictionary</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
