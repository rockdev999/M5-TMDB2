import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className="navbar">
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
            <Link to={"/"} className="btn">
              Home
            </Link>
            <Link to={"popular"} className="btn">
              Popular
            </Link>
            <Link to={"best-movies"} className="btn" href="#pricing">
              Best Movies
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
