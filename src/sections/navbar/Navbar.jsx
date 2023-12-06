import React from "react";
import './navbar.css';
import Logo from '../../assets/logo1.jpg';
import data from "./data";
import {IoMdColorPalette} from 'react-icons/io'


const Navbar = () => {
    return (
        <nav>
        <div className="nav__container">
            <a href="index.html" className='nav__logo'>
                <img className='nav__logo' src={Logo} alt="Portfolio Logo" />
            </a>
            <ul className='nav__menu'>
                {
                    data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a> </li>)
                }

            </ul>
            <button id='theme__icon'><IoMdColorPalette/></button>
        </div>
        </nav>
    )
}

export default Navbar;
