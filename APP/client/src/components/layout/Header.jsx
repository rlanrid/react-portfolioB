import React from 'react'
import nav from '../../data/nav.js'
import { useSelector } from 'react-redux'
import firebase from '../../firebase.js'
import { Link } from 'react-router-dom'

const Header = (props) => {
    const user = useSelector(state => state.user);

    const LogOutHandler = () => {
        firebase.auth().signOut();
        window.location.reload()
    }

    return (
        <header id="header">
            <div className="header__wrap containerH">
                <div className="header__container">
                    <div className="header__logo">
                        <div className="logo__text">
                            {user.accessToken === "" ? (
                                <a href="/">
                                    Frontend Developer - W<i>oojoo</i><em>K<i>im</i></em>
                                </a>
                            ) : (
                                <a href="/" className='logged'>
                                    Welcome To My Portfolio, <strong>{user.displayName}</strong>
                                </a>
                            )}

                        </div>
                    </div>
                    <nav className="nav">
                        {user.accessToken === "" ? (
                            <ul>
                                {nav.map((navItem, key) => (
                                    <li key={key}>
                                        <a href={navItem.url} className="nav__link">{navItem.title}</a>
                                    </li>
                                ))}
                                <li>
                                    <Link onClick={() => { props.toggleModal() }}>Sign up</Link>
                                </li>
                            </ul>
                        ) : (
                            <ul>
                                {nav.map((navItem, key) => (
                                    <li key={key}>
                                        <a href={navItem.url} className="nav__link">{navItem.title}</a>
                                    </li>
                                ))}
                                <li>
                                    <Link onClick={(() => LogOutHandler())} className='nav__link'>Sign Out</Link>
                                </li>
                            </ul>
                        )}

                    </nav>
                    <div className="nav__mobile__menu" id="navToggle" aria-controls="primary-menu" aria-expanded="false"
                        role="button">
                        <span></span>
                    </div>
                </div>
                <div className="header__line"></div>
            </div>
        </header>
    )
}

export default Header
