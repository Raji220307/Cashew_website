import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import cashewlogo from "../assets/logo.png"; 

function AdminNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/login"); // React Router navigation (no full reload)
  };

  const handleNavClick = () => {
    // ✅ Closes the menu on small screens after clicking a link
    const navCollapse = document.querySelector(".navbar-collapse");
    if (navCollapse && navCollapse.classList.contains("show")) {
      navCollapse.classList.remove("show");
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-4">
      <Container fluid>
        {/* Logo and Title */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={cashewlogo}
            width="35"
            height="35"
            alt="Cashew Logo"
            className="d-inline-block align-top rounded-circle me-2"
          />
          Admin Dashboard
        </Navbar.Brand>

        {/* Hamburger Toggle Button */}
        <Navbar.Toggle aria-controls="admin-navbar-nav" />

        {/* Collapsible Nav Links */}
        <Navbar.Collapse id="admin-navbar-nav" className="justify-content-end">
          <Nav className="text-center">
            <Nav.Link as={Link} to="/" onClick={handleNavClick}>
              <Button variant="outline-light" className="mx-2">Dashboard</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/orders" onClick={handleNavClick}>
              <Button variant="outline-light" className="mx-2">Orders</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/users" onClick={handleNavClick}>
              <Button variant="outline-light" className="mx-2">Users</Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/add-product" onClick={handleNavClick}>
              <Button variant="success" className="mx-2">Add Product</Button>
            </Nav.Link>
            <Button variant="danger" className="mx-2" onClick={handleLogout}>
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNavbar;
