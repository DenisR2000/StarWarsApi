import React from "react";
import '../styles/Navbar.css'
import { Menu, Container, Link } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <>
            <Menu className="menu" inverted>
                <Container className="container">
                    <NavLink exact  to="/">
                        <Menu.Item name="star wars API">Star Wars API</Menu.Item>
                    </NavLink>
                    <NavLink exact to="/people">
                        <Menu.Item name="people">People</Menu.Item>
                    </NavLink>
                    <NavLink to="/plenets">
                        <Menu.Item name="plenets">Plenets</Menu.Item>
                    </NavLink>
                    <NavLink to="/films">
                        <Menu.Item name="films">Films</Menu.Item>
                    </NavLink>
                    <NavLink to="/starships">
                        <Menu.Item name="starships">Starships</Menu.Item>
                    </NavLink>
                    <NavLink to="vehicles">
                        <Menu.Item name="vehicles">Vehicles</Menu.Item>
                    </NavLink>
                </Container>
            </Menu>
        </>
    )
}
export default Navbar