import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import menuIcon from '../../assets/icons/menu.svg';
import closeIcon from '../../assets/icons/x.svg';
import './Header.css';

const Header = props => {
    let [mainMenu, setMainMenu] = useState('closed');

    return (
        <header className='main-header'>
            <h1>P K M K // photography</h1>
            <img src={menuIcon} alt='Open menu' onClick={() => setMainMenu('open')}/>
            {mainMenu === 'open'
                ? (
                    <nav className={`main-menu ${mainMenu}`}>
                        <img src={closeIcon} alt='Close menu' className='close-icon' onClick={() => setMainMenu('closed')}/>
                        <Link to='/' className={`main-links links-${mainMenu}`} onClick={() => setMainMenu('closed')}>HOME</Link>
                        <Link to='/services' className={`main-links links-${mainMenu}`} onClick={() => setMainMenu('closed')}>SESSIONS</Link>
                        <Link to='/project-gallery' className={`main-links links-${mainMenu}`} onClick={() => setMainMenu('closed')}>PORTFOLIO</Link>
                        <Link to='/contact' className={`main-links links-${mainMenu}`} onClick={() => setMainMenu('closed')}>CONTACT</Link>
                    </nav>
                )
                : null}
        </header>
    )
}

export default Header;