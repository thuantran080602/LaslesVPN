import React from 'react'
import Styles from './Rectangle.module.scss'


const Vector = ({src, quantity, name }) => {
  return (
    <div className={Styles.item}>
        <div className={Styles.Icon}>
            <img src={src}/>
        </div>
        <div className={Styles.title}>
            <h5>{quantity}</h5>
            <h6>{name}</h6>
        </div>
    </div>
  )
}

export default Vector