import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './Header.module.scss'
import Navbar from './Navbar'
import Button from '../Button/Button'

const Header = () => {
  return (
    <div className={Styles.header}>
        <div className={Styles.logo}>
            <img src='image/Vector.png'/>
            <Link to={'/'}>
                <span>Lasles<span>VPN</span></span>
            </Link>
        </div>
        <Navbar />
        <div className={Styles.button}>
            <Link to='/'><span>Sign in</span></Link>
            <Button href='/'>Sign up</Button>
        </div>
    </div>
  )
}

export default Header