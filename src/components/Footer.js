import React from "react";

const urls = [
    'www.home.com',
    'www.about.com',
    'www.menu.com',
    'www.reservations.com',
    'www.order-online.com',
    'www.login.com',
    'www.address.com',
    'www.phone.com',
    'www.email.com',
    'www.social.com',
    'www.media.com',
    'www.links.com',
]

const Footer = () => {
    const chef = require('../assets/footer-chef.jpg')
    return <footer>
        <img src={chef} alt="logo"></img>
        <h4>Doormat Navigation</h4>
        <nav>
            <li><a href={urls[0]}>Home</a></li>
            <li><a href={urls[1]}>About</a></li>
            <li><a href={urls[2]}>Menu</a></li>
            <li><a href={urls[3]}>Reservations</a></li>
            <li><a href={urls[4]}>Order Online</a></li>
            <li><a href={urls[5]}>Login</a></li>
        </nav>
        <h4>Contact</h4>
        <nav>
            <li><a href={urls[6]}>Address</a></li>
            <li><a href={urls[7]}>Phone Number</a></li>
            <li><a href={urls[8]}>Email</a></li>
        </nav>
        <h4>Social Media Links</h4>
        <nav>
            <li><a href={urls[9]}>Address</a></li>
            <li><a href={urls[10]}>Phone Number</a></li>
            <li><a href={urls[11]}>Email</a></li>
        </nav>
        
    </footer>
};

export default Footer;