import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <div className='navbar'>
        <span className='title'>Music Search</span>
        <NavLink to='/main' className='navlink' activeClassName='activeNav'>
            Main
        </NavLink>
        <NavLink to='/search' className='navlink' activeClassName='activeNav'>
            Search
        </NavLink>
    </div>
);

export default Navbar;
