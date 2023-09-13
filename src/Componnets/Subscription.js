import React from 'react'
import './Subscription.css'

const Subscription = ({img, title}) => {
  return (
    <div className='Subscription'>
        <img src={img} alt="" className='channel_logo'/>
        <p className='channel__title'>{title}</p>
    </div>
  )
}

export default Subscription