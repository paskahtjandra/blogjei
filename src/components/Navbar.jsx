/**
 * @copyright 2024 paskahtjandra
 * @license Apache-2.0
 */

import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navOpen, navItems }) => {
    const lastActiveLink = useRef();
    const activeBox = useRef();

    const initActiveBox = () => {
        activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
        activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
        activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }

    useEffect(initActiveBox, [])

    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove('active');
        event.target.classList.add('active')
        lastActiveLink.current = event.target;

        activeBox.current.style.top = event.target.offsetTop + 'px';
        activeBox.current.style.left = event.target.offsetLeft + 'px';
        activeBox.current.style.width = event.target.offsetWidth + 'px';
        activeBox.current.style.height = event.target.offsetHeight + 'px';
    }

    return (
        <nav className={'navbar flex-col md:flex-row ' + (navOpen ? 'active' : '')}>
            {
                navItems.map(({ label, link, className }, key) => (
                    <a
                        href={link}
                        key={key}
                        ref={key === 0 ? lastActiveLink : null}
                        className={className}
                        onClick={activeCurrentLink}
                    >
                        {label}
                    </a>
                ))
            }
            <div
                className='active-box'
                ref={activeBox}
            ></div>
        </nav>
    )
}

export default Navbar