import { Container, Nav,  Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="py-3" collapseOnSelect expand="lg" style={{backgroundColor:'#0B2447'}} variant="">
      <Container>
        <Navbar.Brand className="text-white fw-bolder fs-3">Movie <span style={{}}>Web</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto text-white">
            <Link to='/' className="nav-link text-white fw-semibold" href="#features">Home</Link>
            <Nav.Link className="text-white fw-semibold" href="#features">Cinema Movies</Nav.Link>
            <Nav.Link className="text-white fw-semibold" href="#pricing">Tv Series</Nav.Link>
            <Nav.Link className="text-white fw-semibold" href="#pricing">Cartoon</Nav.Link>
            <Nav.Link className="text-white fw-semibold" href="#pricing">Anime</Nav.Link>
            
            
            
          </Nav>
          <Nav>
            <Nav.Link className="text-white fw-semibold">Login</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
