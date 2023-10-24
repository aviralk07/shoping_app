import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
const navbar = () => {
  return (
    <div>
      <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Nav className="ms-auto">
              <Nav.Link className="shop-link" href="/">
                Shop
              </Nav.Link>
              <Nav.Link href="/cart">
                <ShoppingCart className="shopping-cart" size={45}  weight="duotone" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default navbar;
