import React, { useState } from 'react'
import './LeftNav.scss'
import at_avatar from '../../Assets/Images/at_avatar.png'
import dashboard from '../../Assets/Icons/dashboard.svg'
import products from '../../Assets/Icons/products.svg'
import orders from '../../Assets/Icons/orders.svg'
import favourites from '../../Assets/Icons/favourites.svg'
import arrival from '../../Assets/Icons/arrival.svg'
import { useSelector } from 'react-redux'

function LeftNav() {

  const height = useSelector((state) => state.heightData);

  return (
    <>
      <div className='leftnav-container' style={{ height: height ? `calc(100vh - 200px)` : `calc(100vh - 105px)`}}>
        <div className='leftnav-head'>
          <img src={at_avatar} alt="at avatar" className='at-avatar' />
          <p className='f-14'><b>A.T. INKS</b></p>
        </div>
        <div className='nav-items-container'>
          <div className='item'>
            <img src={dashboard} alt='dashboard icon' className='icon' />
            <p className='f-14 text-grey'>Dashboard</p>
          </div>
          <div className='item selected-item'>
            <img src={products} alt='dashboard icon' className='icon' />
            <p className='f-14 text-grey'>All Products</p>
          </div>
          <div className='item'>
            <img src={orders} alt='dashboard icon' className='icon' />
            <p className='f-14 text-grey'>Orders</p>
          </div>
          <div className='item'>
            <img src={favourites} alt='dashboard icon' className='icon' />
            <p className='f-14 text-grey'>Favourites</p>
          </div>
          <div className='item'>
            <img src={arrival} alt='dashboard icon' className='icon' />
            <p className='f-14 text-grey'>New Arrival</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LeftNav