import React from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
    const btns = {
        display: "flex",
        justifyContent: "space-evenly",
    };
    return (
        <div style={btns}>
            {/* <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link> */}

            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink className="navlink" to="/contact">Contact Us</NavLink>
        </div>
    )
}

export default Navbar
