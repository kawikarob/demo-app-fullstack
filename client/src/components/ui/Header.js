import React from "react";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";
import { Link } from "react-router-dom";

export const Header = () => {
   return (
      <Navbar color="dark" dark>
         <Container>
            <NavbarBrand>My Quotes</NavbarBrand>
            <Nav>
               <NavItem>
                  <Link to="/add-quote" className="btn btn-primary">
                     Add Quote
                  </Link>
               </NavItem>
               <NavItem>
                  <Link to="/" className="text-light ml-3">
                     Logout
                  </Link>
               </NavItem>
            </Nav>
         </Container>
      </Navbar>
   );
};
