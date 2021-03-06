import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
        <Navbar
            color="light"
            expand="md"
            light
        >
            <NavbarBrand href="/">
            Xatalog
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav
                className="me-auto"
                navbar
            >
                <NavItem>
                <NavLink>
                    <Link style={{textDecoration: 'none', color: 'unset'}} to="/" >Product</Link>
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink>
                    <Link style={{textDecoration: 'none', color: 'unset'}} to="/add" >Add Product</Link>
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink >
                    <Link style={{textDecoration: 'none', color: 'unset'}} to="/profile" >Profile</Link>
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink >
                    <a style={{textDecoration: 'none'}} className="text-danger" href="/login" onClick={() => sessionStorage.removeItem('token')} >Logout</a>
                </NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
        </div>
    )
}

export default Header;