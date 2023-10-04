import React, { useState } from 'react'
import './header.css'
const Header = () => {
   
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        if(this.scrollY >= 80) header.classList.add('scroll-header');
        else header.classList.remove('scroll-header')
    })

  const [Toggle, showMenu] =useState(false); 
  const [activeNav, setActiveNav] = useState('#home')

  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">King Brayn</a>
            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list-set grid">
                    <li className="nav__item">
                        <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'nav__link' : 'nav__link'}>
                            <i className="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" onClick={()=> setActiveNav('#about')} className="nav__link"> 
                            <i className="uil uil-user nav__icon"></i> About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" onClick={()=> setActiveNav('#skills')} className="nav__link">
                            <i className="uil uil-file-alt nav__icon"></i> Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" onClick={()=> setActiveNav('#service')} className="nav__link">
                            <i className="uil uil-briefcase nav__icon"></i> Service
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#porfolio" onClick={()=> setActiveNav('#porfolio')} className="nav__link">
                            <i className="uil uil-scenery nav__icon"></i> Porfolio
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" onClick={()=> setActiveNav('#contact')} className="nav__link">
                            <i className="uil uil-message nav__icon"></i> Contact
                        </a>
                    </li>
                </ul>
                <i className="uil uil-times nav__close" onClick={()=> showMenu(!Toggle)}></i>
            </div>
            <div className="nav__toggle" onClick={()=> showMenu(!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header