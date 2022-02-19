import React from 'react'
import Styles from './Rectangle.module.scss'
import Vector from './Vector'

const Rectangle = () => {
    
    const items = [
        {
            src: 'image/Icon/user.png',
            quantity: '90+',
            name: 'Users',
        },
        {
            src: 'image/Icon/location.png',
            quantity: '30+',
            name: 'Locations',
        },
        {
            src: 'image/Icon/Server.png',
            quantity: '50+',
            name: 'Servers',
        }
    ]
  return (
    <div className={Styles.Rectangle}>
                    {items.map((item, index) => {
                return <Vector {...item} key={index}/>
            })}
    </div>
  )
}

export default Rectangle