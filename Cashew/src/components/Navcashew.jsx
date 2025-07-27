import { Navbar, Container, Nav, NavDropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import cashewlogo from '../assets/logo.png';
import { useState, useEffect } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';

function Navcashew() {
  const [cartCount, setCartCount] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const token = localStorage.getItem("userToken");
  const role = localStorage.getItem("userRole");

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartCount(cartItems.length);
  }, []);

  useEffect(() => {
    const updateCart = () => {
      const items = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartCount(items.length);
    };
    window.addEventListener("storage", updateCart);
    return () => window.removeEventListener("storage", updateCart);
  }, []);

  const handleNavClick = () => {
    setExpanded(false); 
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userRole");
    window.location.href = "/";
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      fixed="top"
      variant="light"
      className="nav shadow-sm custom-navbar"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center" onClick={handleNavClick}>
          <img
            src={cashewlogo}
            width="30"
            height="30"
            alt="Cashew Logo"
            className="d-inline-block align-top rounded-circle me-2"
          />
          <span className="fw-bold">Pratipa Cashews</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end slide-left">
          <Nav className="ms-auto text-center" navbarScroll>
            <Nav.Link as={NavLink} to="/" onClick={handleNavClick} active={location.pathname === '/'}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={handleNavClick} active={location.pathname === '/about'}>
              About
            </Nav.Link>

            <NavDropdown title="Products" id="productsDropdown">
              <NavDropdown.Item as={Link} to="/products" onClick={handleNavClick}>Product List</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/health" onClick={handleNavClick}>Health Benefits</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Our Process" id="processDropdown">
              <NavDropdown.Item as={Link} to="/farming" onClick={handleNavClick}>Cashew Farming</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/processing" onClick={handleNavClick}>Processing</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/export" onClick={handleNavClick}>Export & Trade</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/cart" onClick={handleNavClick}>
              <FaShoppingCart size={20} />
              {cartCount > 0 && (
                <Badge pill bg="danger" style={{ marginLeft: '5px' }}>
                  {cartCount}
                </Badge>
              )}
            </Nav.Link>

            {/* Auth Section */}
            {token ? (
              <>
                {role === "admin" && (
                  <Nav.Link as={Link} to="/admin/add-product" onClick={handleNavClick}>
                    Add Product
                  </Nav.Link>
                )}
                <Nav.Link onClick={() => { handleLogout(); handleNavClick(); }}>
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login" onClick={handleNavClick}>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register" onClick={handleNavClick}>
                  Sign Up
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navcashew;
