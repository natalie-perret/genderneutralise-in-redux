import React from 'react'
import {Link} from 'react-router-dom'


const Nav = () => {
  return (
    <div className="row">
      <div className="twelve columns">
        <ul className="navbar">
          <div className="logo">
            <Link to={'/'}>gender.neutralise</Link>
          </div>
          <div className="options">
            <li><Link to={'/about'}>about</Link></li>
            <li><Link to={'/search'}>search</Link></li>
            <li><Link to={'/dictionary'}>dictionary</Link></li>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Nav
