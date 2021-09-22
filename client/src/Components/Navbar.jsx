import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
            <NavLink to="/admin" exact activeClassName="active">Admin</NavLink>
            <NavLink to="/cart" exact activeClassName="active">Cart</NavLink>
            <NavLink to="/login" exact activeClassName="active">Login</NavLink>
        </nav>
    )
}

export default Navbar
