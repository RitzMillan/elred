import React from 'react'
import './TopNav.scss'
import logo from '../../Assets/Images/atinks_logo.png'
import search from '../../Assets/Icons/search.svg'
import avatar from '../../Assets/Images/avatar.png'
import dropdown from '../../Assets/Icons/dropdown.svg'
import at_avatar from '../../Assets/Images/at_avatar.png'

function TopNav() {
  return (
    <>
    <div className='Nav-container'>
        <div className='left'>
          <img src={logo} alt='logo' className='logo' />
          <div className="search">
            <span><img src={search} alt="search" className="fa fa-search"/></span>
            <input placeholder="Search..." />
          </div>
        </div>
        <div className='right'>
          <div className='avatar-logo-wraper'>
            <img src={at_avatar} alt='logo' className='avatar-logo'/>
            <img src={dropdown} alt="dropdown" className='dropdown'/>
          </div>
          <div className='avatar-wraper'>
            <img src={avatar} alt="avatar" className='avatar'/>
            <div className='avatar-text'>
              <p className='f-16'>User Admin</p>
              <p className='f-10 text-grey'>useradmin@elred.io</p>
            </div>
            <img src={dropdown} alt="dropdown" className='dropdown'/>
          </div>
        </div>
    </div>
    </>
  )
}

export default TopNav