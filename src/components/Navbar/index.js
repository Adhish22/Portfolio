import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Adhish Sharma
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink
                  to="/"
                  activeStyle={{ color:'black' }}
                >
                    Home
                </NavLink>
                <NavLink
                  to="/about"
                  activeStyle={{ color: 'black' }}
                >
                    About
                </NavLink>
                <NavLink
                  to="/blog"
                  activeStyle={{ color: 'black' }}
                >
                    Blog
                </NavLink>
                <NavLink
                  to="/projects"
                  activeStyle={{ color: 'black' }}
                >
                    Projects
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/resume.js">Resume</NavBtnLink>
                </NavBtn>
            </NavMenu>
           </Nav>
        </>
    );
};
export default Navbar;
