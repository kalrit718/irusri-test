import './NavigationBar.css';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import AccountDropdown from '@components/AccountDropdown/AccountDropdown';

export default function NavigationBar() {
  
  return (
    <Navbar expand='md' collapseOnSelect style={{ height: '10vh' }} bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>
          <span className='main-logo-label'>
            MyTDL
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse className='bg-dark z-3 me-auto my-2 my-lg-0' id='responsive-navbar-nav'>
          <Nav style={{ width: '30%' }} className='me-auto'></Nav>
          <Nav navbarScroll style={{ width: '70%' }} justify>
            <Nav.Link as={Link} to='/Home' className='nav-router-link'>
              Home Page
            </Nav.Link>
            <Nav.Link as={Link} to='/About' className='nav-router-link'>
              About MyTDL
            </Nav.Link>
            <Nav.Link as={Container} className='nav-router-link'>
              <AccountDropdown />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
