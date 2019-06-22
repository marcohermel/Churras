import React from 'react';
import { Container, Navbar, NavbarBrand, } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export default () => (
  <header>
    <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
      <Container>
        <NavbarBrand tag={Link} to="/">Churrascos</NavbarBrand>
      </Container>
    </Navbar>
  </header>
);

