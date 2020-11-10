import React, {useState} from 'react';
import menuIcon from '../../assets/icons/menu.svg';
import './Header.css';

const Header = props => {
    let [mainMenu, setMainMenu] = useState(false);

    return (
        <header className='main-header'>
            <h1>P K M K // photography</h1>
            <img src={menuIcon} alt='Main menu'/>
            {mainMenu
                ? (
                    <nav className='main-menu'>
                        
                    </nav>
                )
                : null}
        </header>
    )
}

export default Header;