import React from "react";
import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar
      color="dark"
      dark
      className="d-flex justify-content-between align-items-center"
    >
      <NavbarBrand href="/">CRUD Employee Application</NavbarBrand>
      <Nav>
        <NavItem>
          <Link to="/add" className="btn btn-primary">
            Add Employee
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
};
