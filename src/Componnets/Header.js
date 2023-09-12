import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from '../SVG/YouTube_Logo_2017.svg.png'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header__right">
            <MenuIcon className='header__menu'/>
            <img src={logo} alt="youtube logo" />
        </div>
        <div className="header__center">
            <div className="header_search">
                <input type="text" placeholder='Search'/>
                <SearchIcon className='search__icon'/>
            </div>
            <KeyboardVoiceIcon className='mic__icon'/>    
        </div>
        <div className="header__rights">
            <VideoCallIcon className='header_icons'/>
            <AppsIcon className='header_icons'/>
            <NotificationsIcon className='header_icons'/>
            <AccountCircleIcon className='header_icons'/>  
        </div>
      
    </div>
  )
}

export default Header