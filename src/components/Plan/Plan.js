import React from 'react'
import Styles from './Plan.module.scss'
import Selection from '../Selection/Selection'


const Plan = () => {
    
    const plan = {
        h1: 'Choose Your Plan',
        h2: "Let's choose the package that is best for you and explore it happily and cheerfully."
    }
  return (
    <div>
        <Selection {...plan}/>
    </div>
  )
}

export default Plan