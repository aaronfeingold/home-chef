import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { MdRestaurantMenu } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

export class Navbar extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      click: false
    }
  }

  handleClick = () => {
    let tempState = this.state.click
    this.setState({
      click: !tempState
    })
  }

  closeMobileMenu = () => {
    this.setState({
      click: false
    })
  }
  render(){

    return(
      <IconContext.Provider value={{color: '#fff'}}>
      <div className='navbar'>
        <div className='navbar-container container'>
          <NavLink to='/' className="navbar-logo">
            <MdRestaurantMenu className='navbar-icon' />
            Home Chef
          </NavLink>
          <div className='menu-icon' onClick={this.handleClick}>
            {this.state.click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={this.state.click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink to='/home' className='nav-links' onClick={this.closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/login' className='nav-links' onClick={this.closeMobileMenu}>
                Login
              </NavLink> 
            </li>
            <li className='nav-item'> 
              <NavLink to='/signup' className='nav-links' onClick={this.closeMobileMenu}>
                Signup
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      </IconContext.Provider>
  
    )
  }
}

export default Navbar;