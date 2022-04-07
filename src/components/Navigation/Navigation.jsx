import React from 'react'
// import { Navbar } from 'react-bootstrap'
// import { Container } from 'react-bootstrap'
// import { Offcanvas } from 'react-bootstrap'
// import { Nav } from 'react-bootstrap'
// import { NavDropdown } from 'react-bootstrap'
// import { Form } from 'react-bootstrap'
// import { FormControl } from 'react-bootstrap'
// import { Button } from 'react-bootstrap'
import './Navigation.css'
import '../Header/Header.css'
import logo from '../../images/logo.png'

const Navigation = () => {
    return (
        <>
            <nav>
                <div className="sides left__nav">
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">SERVICES</a></li>
                    </ul>
                </div>
                <img src={logo} alt="" />
                <div className="sides right__nav">
                    <ul>
                        <li><a href="#">BRANCES</a></li>
                        <li><a href="#">ROOMS</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                </div>

            </nav>
        </>


    )
}

export default Navigation