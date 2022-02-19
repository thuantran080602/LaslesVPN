import React, { Children } from 'react'
import Styles from './Button.module.scss'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

const Button = ({children,active,href,shadow,borderSM}) => {
  return (
    <button className={clsx(Styles.button,{
        [Styles.active] : active,
        [Styles.borderSM] : borderSM,
        [Styles.shadow] : shadow

    })}>
        <Link to={href}>
            {children}
        </Link>  
    </button>
  )
}

export default Button