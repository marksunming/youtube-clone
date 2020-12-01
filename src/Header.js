import React, { useState } from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

function Header() {
    const history = useHistory();
    const [input, setInput] = useState('');

    const goToUrl = () => {
        if (input) {
            history.push(`/search/${input}`);
            setInput('');
        }
    }

    return (
        <div className='header'>
            <div className="header__left">
                <MenuIcon />
                <Link to='/'>
                    <img 
                        className='header__logo'
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/200px-YouTube_Logo_2017.svg.png" 
                        alt=""
                    />
                </Link>
                
            </div>
            
            <div className="header__input">
                <input 
                    placeholder='Search' 
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}    
                />
                <SearchIcon 
                    onClick={goToUrl} 
                    className='header__inputButton'
                />
            </div>
            
            <div className="header__icons">
                <VideoCallIcon className='header__icon' />
                <AppsIcon className='header__icon' />
                <NotificationsIcon className='header__icon' />
                <Avatar 
                    alt='Ming Sun'
                    src='https://lh3.googleusercontent.com/ogw/ADGmqu8DPiaElkRmffq84TxmYmFY3454rOM_JaewIgpQ=s32-c-mo'
                />
            </div>
            
        </div>
    )
}

export default Header
