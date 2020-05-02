import React from 'react'
import { Link } from 'react-router-dom' // net ninja lecture 26
import { withRouter } from 'react-router-dom' //net ninja lecture 27 (with captions)

const Navbar = props => {
  // console.log(props)
  // setTimeout(() => {
  //   props.history.push('/contact')
  // }, 4000)
  return (
    <nav className='nav-wrapper red darken-3'>
      <div className='container'>
        <Link to='/' className='brand-logo'>
          Poke'Times
        </Link>
        <ul className='right'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)
