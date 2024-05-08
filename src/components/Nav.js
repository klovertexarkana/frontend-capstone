import React from "react";

const urls = [
    'www.home.com',
    'www.about.com',
    'www.menu.com',
    'www.reservations.com',
    'www.order-online.com',
    'www.login.com',
]

const Nav = () => {
    return <nav>
        <li><a href={urls[0]}>Home</a></li>
        <li><a href={urls[1]}>About</a></li>
        <li><a href={urls[2]}>Menu</a></li>
        <li><a href={urls[3]}>Reservations</a></li>
        <li><a href={urls[4]}>Order Online</a></li>
        <li><a href={urls[5]}>Login</a></li>
    </nav>
};

export default Nav;