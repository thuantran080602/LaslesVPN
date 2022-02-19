import React from 'react'
import Styles from './Illustration1.module.scss'
import Button from '../Button/Button'

const Illustration1 = () => {
  return (
    <div className={Styles.Illustration1}> 
      <div className={Styles.Illustration1Left}>
        <h1>Want anything to be easy with <span>LaslesVPN.</span></h1>
        <h4>Provide a network for all your needs with ease and fun using <span>LaslesVPN</span> discover interesting features from us.</h4>
        <Button href='/' active borderSM shadow>Get Start</Button>
      </div>
      <div className={Styles.Illustration1Right}>
        <img src='image/Illustration1.png'/>
      </div>
    </div>
  )
}

export default Illustration1