import React, { useState } from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav className='navbar'>
            <div className="nav__text">
                <Link to="/"><h2>
                    <span>N</span>ews
                    <span>A</span>pp</h2></Link>
            </div>
            <div className={showMenu ? "menu-link mobile-menu-link" : "menu-link"}>
                <ul>
                    <li className="nav__text"><Link to="/business" className='a'>Business</Link></li>
                    <li className="nav__text"><Link to="/technology" className='a'>Technology</Link></li>
                    <li className="nav__text"><Link to="/sports" className='a'>Sports</Link></li>
                    <li className="nav__text"><Link to="/science" className='a'>Science</Link></li>
                    <li className="nav__text"><Link to="/entertainment" className='a'>Entertainment</Link></li>
                    <li className="nav__text"><Link to="/health" className='a'>Health</Link></li>
                </ul>
            </div>
            <div className="hamburger-menu">
                <a href='#' onClick={() => setShowMenu(!showMenu)}>
                    <GiHamburgerMenu />
                </a>
            </div>
        </nav >
    )
}

export default Nav