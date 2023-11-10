import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Search from './Search';
import { Link } from "react-router-dom";

//returns navbar component
function NavBar({art, setSearch}) {//props
  return (
    
    <Navbar expand="lg" className=" navbar bg-body-tertiary" bg="light" data-bs-theme="light">
      <Container fluid className='nav'>
        {/* NavBar Logo */}
        <Navbar.Brand className='navbar-brand'href="/">Art Gallery</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             &nbsp;
            {/* Navbar links */}
            <Nav.Link as={Link} to="/" className='nav-link' >Home</Nav.Link>
            <Nav.Link as={Link} to="/artworks" className='nav-link'>The Collection</Nav.Link>
            <Nav.Link as={Link} to="/artworks" className='nav-link'>Exhibitions</Nav.Link>
          </Nav>
          {/* NavBar Search */}
          <Search art={art} setSearch={setSearch}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavBar;