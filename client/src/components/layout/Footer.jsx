import React from 'react'
import nav from '../../data/nav'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer__wrap containerH">
                <div className="footer__logo">
                    <a href="/">
                        Frontend Developer - WK
                    </a>
                </div>
                <div className="footer__nav">
                    <ul>
                        {nav.map((navItem, key) => (
                            <li key={key}>
                                <a href={navItem.url} className="nav__link">{navItem.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer__made">
                    Built With React
                </div>
            </div>
        </footer>
    )
}

export default Footer
