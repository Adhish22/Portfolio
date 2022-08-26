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
                <a href="https://drive.google.com/file/d/1mxaF8u6PbXXc-Z52iNHZk0zawsD-8f_9/view?usp=sharing" download="Adhish Sharma - Resume" target="_blank" class="resumeLink">
                    Resume
                </a>
            </NavMenu>
           </Nav>
        </>
    );
};
export default Navbar;
