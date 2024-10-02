import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./assets/logo.png";
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container fluid className="container-navbar">
        <Navbar.Brand href="#home" className="container-logo">
          <img className="logo" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="toggle"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto content-btn">
            <Nav.Link className="btn" href="#pricing">
              Popular
            </Nav.Link>
            <Nav.Link className="btn" href="#features">
              Home
            </Nav.Link>
            <Nav.Link className="btn" href="#pricing">
              Best Movies
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
