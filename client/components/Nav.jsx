import React from 'react'
import {Link} from 'react-router-dom'


const Nav = () => {
  return (
    <div className="row navbar">
      <div className="six columns">
        <div className="logo">
          <Link to={'/'}>gender.neutralise</Link>
        </div>
      </div>
      <div className="six columns">
        <ul className="menu-options">
          <li><Link to={'/about'}>about</Link></li>
          <li><Link to={'/search'}>search</Link></li>
          <li><Link to={'/dictionary'}>dictionary</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
