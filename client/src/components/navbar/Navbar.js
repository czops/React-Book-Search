import React from "react";
import Navbar from "react-bootstrap/Navbar";
// import "../navbar/navbar.css";

function NavbarComponent() {
    return (
        <Navbar className="navbarBig">
            <Navbar.Brand>
                <h3>
                React - Google Books Search
                </h3>
                {/* <img
                    src="../../../public/images/react-logo.jpg"
                    width="230"
                    height="auto"
                    className="d-inline-block align-top"
                    alt="React - Google Books Search"
                /> */}
            </Navbar.Brand>
            <Navbar.Text className="logoutLink">
                <a href="/"> | HOME</a>
                <a href="/Saved"> | SAVED</a>
            </Navbar.Text>
        </Navbar>
    )
};

export default NavbarComponent;