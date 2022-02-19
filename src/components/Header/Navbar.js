import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './Header.module.scss'

const Navbar = () => {
  return (
    <div>
        <ul className={Styles.nav} >
            <li><Link to='/'><span>About</span></Link></li>
            <li><Link to='/'><span>Features</span></Link></li>
            <li><Link to='/'><span>Pricing</span></Link></li>
            <li><Link to='/'><span>Testimonials</span></Link></li>
            <li><Link to='/'><span>Help</span></Link></li>
        </ul>
    </div>
  )
}

export default Navbar