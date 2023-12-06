import React from "react";
import './header.css';
import HeaderImage from '../../assets/header-image-kalindu.jpeg';
import data from "./data";

const Header = () => {
    return(
        <section id='header'>
        <div className='container header__container'>
            <div className='header__profile'>
                <img src={HeaderImage} alt="Header Image" />
            </div>
            <h2> Kalindu Madduma Hewage </h2>
            <p> Software Developer </p>
            <div className='header__cta'>
                <a href='#contact'>Let's Talk</a>
                <a href='#portfolio'>My Work</a>
            </div>
            <div className='header__socials'>
                {
                    data.map( item => <a key={item.id} href={item.link} target={"_blank"}
                                         rel="noopener noreferrer"> {item.icon} </a>)
                }
            </div>
        </div>
        </section>
    )
}

export default Header;
