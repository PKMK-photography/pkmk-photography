import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import menuIcon from '../../assets/icons/menu.svg';
import closeIcon from '../../assets/icons/x.svg';
import './Header.css';

const Header = props => {
    let [mainMenu, setMainMenu] = useState('closed');

    return (
        <header className='main-header'>
            <h1>P K M K // photography</h1>
            <img src={menuIcon} alt='Open menu' className='mobile' onClick={() => setMainMenu('open')}/>
            <nav className={`main-menu ${mainMenu}`}>
                <img src={closeIcon} alt='Close menu' className='close-icon' onClick={() => setMainMenu('closed')}/>
                <Link to='/' className={`main-links links-${mainMenu}`} onClick={() => setMainMenu('closed')}>HOME</Link>
                <Link to='/services' className={`main-links links-${mainMenu}`} onClick={() => setMainMenu('closed')}>SESSIONS</Link>
                <Link to='/project-gallery' className={`main-links links-${mainMenu}`} onClick={() => setMainMenu('closed')}>PORTFOLIO</Link>
                <Link to='/contact' className={`main-links links-${mainMenu}`} onClick={() => setMainMenu('closed')}>CONTACT</Link>
            </nav>
            <nav className='desktop-menu'>
                <Link to='/'>
                    <button className={props.location.pathname !== '/' ? 'dark-theme' : 'light-theme'}>HOME</button>
                </Link>
                <Link to='/services'>
                    <button className={props.location.pathname !== '/' ? 'dark-theme' : 'light-theme'}>SESSIONS</button>
                </Link>
                <Link to='/project-gallery'>
                    <button className={props.location.pathname !== '/' ? 'dark-theme' : 'light-theme'}>PORTFOLIO</button>
                </Link>
                <Link to='/contact'>
                    <button className={props.location.pathname !== '/' ? 'dark-theme' : 'light-theme'}>CONTACT</button>
                </Link>
            </nav>
        </header>
    )
}

export default withRouter(Header);