import React from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = () => {
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
            <NavbarToggler onClick={function noRefCheck(){}} />
            <Collapse navbar>
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
                    <Link style={{textDecoration: 'none'}} className="text-danger" to="/login" >Logout</Link>
                </NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
        </div>
    )
}

export default Header;