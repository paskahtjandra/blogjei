/**
 * @copyright 2024 paskahtjandra
 * @license Apache-2.0
 */
import { useState } from "react";

import Navbar from "./Navbar";

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    const navItems = [
        {
            label: 'Home',
            link: '#home',
            className: 'nav-link active'
        },
        {
            label: 'About',
            link: '#about',
            className: 'nav-link'
        },
        {
            label: 'Work',
            link: '#work',
            className: 'nav-link'
        },
        {
            label: 'Reviews',
            link: '#reviews',
            className: 'nav-link'
        },
        {
            label: 'Contact',
            link: '#contact',
            className: 'nav-link md:hidden'
        }
    ];

    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-white to-zinc-900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,auto,1fr]">

                <h1>
                    <a href="/" className="logo">
                        <img
                            src="/images/logo.png"
                            width={100}
                            height={100}
                            alt="Paskah Tjandra"
                        />
                    </a>
                </h1>

                <div className="relative md:justify-self-center">
                    <button
                        className="menu-btn md:hidden"
                        onClick={() => setNavOpen((prev) => !prev)}
                    >
                        <span className="material-symbols-rounded">
                            {navOpen ? 'close' : 'menu'}
                        </span>
                    </button>

                    <Navbar navOpen={navOpen} navItems={navItems} />
                </div>
                <div className="hidden md:flex justify-end items-center gap-3">
                    {navItems.map(({ label, link }, key) => (<a href={link}>{label}</a>))}
                </div>
            </div>
        </header>
    )
}

export default Header