import React from 'react'
import Styles from './Illustration2.module.scss'


const Illustration2 = () => {
  return (
    <div className={Styles.Illustration2}>
        <div className={Styles.Illustration2Left}>
            <img src='image/Illustration2.png' alt='Illustration2'/>
        </div>
        <div className={Styles.Illustration2Right}>
            <h1>
            We Provide Many Features You Can Use
            </h1>
            <h2>
            You can explore the features that we provide with fun and have their own functions each feature.
            </h2>
            <ul>
                <li>
                <img src='image/Tick.png'/>
                Powerfull online protection.
                </li>
                <li>
                <img src='image/Tick.png'/>
                Internet without borders.
                </li>
                <li>
                <img src='image/Tick.png'/>
                Supercharged VPN
                </li>
                <li>
                <img src='image/Tick.png'/>
                No specific time limits.
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Illustration2