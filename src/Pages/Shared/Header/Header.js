import React from 'react';
import './Header.css'
import logo from '../../../images/logo/logo.png'
import {
    Link, NavLink
} from "react-router-dom"
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <>
                <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#success">Success</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#specialist">Specialists</Nav.Link>
                            {user?.email ?
                                <Button onClick={logOut} variant="light">
                                    Logout
                                </Button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                            <Navbar.Text>
                                Signed in as: <a href="#login">{user?.displayName}</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>












            {/* <div className="menubar-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div>
                                <img className="w-100" src={logo} alt="" />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div>

                                <ul className="d-flex align-items-end justify-content-end">
                                    <Link to="/home" className="item">
                                        {""}
                                        <li>Home</li>
                                    </Link>
                                    <Link to="/about" className="item">
                                        {""}
                                        <li>About</li>
                                    </Link>
                                    <Link to="/courses" className="item">
                                        <li>Courses</li>
                                    </Link>
                                    <Link to="blog" className="item">
                                        <li>Blog</li>
                                    </Link>
                                    <Link to="contact" className="item">
                                        <li>Contact</li>
                                    </Link>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default Header;