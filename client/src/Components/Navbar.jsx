import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/" exact>Home</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/cart">Cart</Link>
        </nav>
    )
}

export default Navbar
