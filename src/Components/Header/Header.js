import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import menuIcon from '../../assets/icons/menu.svg';
import closeIcon from '../../assets/icons/x.svg';
import './Header.css';

const Header = props => {
    let [mainMenu, setMainMenu] = useState(false);

    return (
        <header className='main-header'>
            <h1>P K M K // photography</h1>
            <img src={menuIcon} alt='Open menu' onClick={() => setMainMenu(true)}/>
            {mainMenu
                ? (
                    <nav className='main-menu'>
                        <img src={closeIcon} alt='Close menu' className='close-icon' onClick={() => setMainMenu(false)}/>
                        <Link to='/' className='main-links' onClick={() => setMainMenu(false)}>HOME</Link>
                        <Link to='/services' className='main-links' onClick={() => setMainMenu(false)}>SESSIONS</Link>
                        <Link to='/project-gallery' className='main-links' onClick={() => setMainMenu(false)}>PORTFOLIO</Link>
                        <Link to='/contact' className='main-links' onClick={() => setMainMenu(false)}>CONTACT</Link>
                    </nav>
                )
                : null}
        </header>
    )
}

export default Header;