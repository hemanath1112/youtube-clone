import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
// import VideoCallOutlinedIcon from '@mui/icons-material/VideoCall';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from '../SVG/YouTube_Logo_2017.svg.png'
import './Header.css'

import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TheatersIcon from '@mui/icons-material/Theaters';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import Sidebar from './Sidebar';
import Subscription from './Subscription'

const Header = () => {
  return (
    // header section
    <div className="parent">
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
                <VideoCallOutlinedIcon className='header_icons'/>
                {/* <AppsIcon className='header_icons'/> */}
                <NotificationsNoneOutlinedIcon className='header_icons'/>
                <AccountCircleIcon className='header_icons'/>  
            </div>
        </div>

    
        <div className="sideBar">
            <Sidebar icon={<HomeIcon/>} title="Home"/>
            <Sidebar icon={<ExploreIcon/>} title="Explore"/>
            <Sidebar icon={<SubscriptionsIcon/>} title="Subscription"/>
            <hr />
            <Sidebar icon={<VideoLibraryIcon/>} title="Library"/>
            <Sidebar icon={<HistoryIcon/>} title="History"/>
            <Sidebar icon={<OndemandVideoIcon/>} title="Your videos"/>
            <Sidebar icon={<WatchLaterOutlinedIcon/>} title="Watch later"/>
            <Sidebar icon={<ThumbUpAltOutlinedIcon/>} title="Liked videos"/>
            <Sidebar icon={<ExpandMoreOutlinedIcon/>} title="Show more"/>
            <hr />
            <h1>Subscription</h1>
            <Subscription img="https://i.pinimg.com/736x/0d/99/df/0d99df7ffa3f29bebf62c4e3eeb6312e.jpg" title="hema"/>
            <Subscription img="https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-467.jpg" title="hema"/>
            <Subscription img="https://e1.pxfuel.com/desktop-wallpaper/41/754/desktop-wallpaper-gamer-youtuber-gaming-avatar-with-headphones-for-esport-logo-%E2%80%A6-avatar-logo.jpg" title="hema"/>
            <Subscription img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xeWaPA-8IdLps3gbBF3czThypQk_Ym4FOQ&usqp=CAU" title="hema"/>
            <Sidebar icon={<ExpandMoreOutlinedIcon/>} title="Show more"/>
            <hr />
            <Sidebar icon={<YouTubeIcon/>} title="YouTube"/>
            <Sidebar icon={<TheatersIcon/>} title="Theaters"/>
            <Sidebar icon={<SportsEsportsIcon/>} title="Sports"/>
            <hr />
            <Sidebar icon={<SettingsIcon/>} title="Settings"/>
            <Sidebar icon={<FlagOutlinedIcon/>} title="Flag"/>
            <Sidebar icon={<HelpOutlineIcon/>} title="Help"/>
            <Sidebar icon={<FeedbackOutlinedIcon/>} title="Feedback"/>
            <hr />
   
            <div className="footer">
                <p>About Press Copyright</p>
                <p>Contact us Creators</p>
                <p>Advertise Developers</p>
            </div>
            <div className="div">
            <p>Advertise Developers</p>
            <p>Advertise Developers</p>
            <p>Advertise Developers</p>
            </div>
            <div className="copyrights">
                <p> &copy; 2023 Google LLC</p>
               
            </div>
        </div>
    </div>

    

  )
}

export default Header