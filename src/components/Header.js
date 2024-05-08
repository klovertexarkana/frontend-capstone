import React from "react";

const Header = () => {
    const Logo = require('../assets/Logo.png')
    return <header>
            <img src={Logo} alt="logo"></img>;
        </header>
};

export default Header;
