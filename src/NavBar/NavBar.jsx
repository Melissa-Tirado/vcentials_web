import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css"
import LogoutSVG from './LogoutSVG.jsx'
import styles from './NavBar.module.css'
import {Link} from 'react-router-dom';


function NavBar(){


    return(
        <>


      <Navbar bg="danger" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand className={styles.navbar_brand}>VCentials</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.nav_toggler}/>
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link className={styles.nav_links} href="/">Home</Nav.Link>
            <Nav.Link className={styles.nav_links} href="/about">About</Nav.Link>
            <Nav.Link className={styles.nav_links} href="/profile">Profile</Nav.Link>
            <Nav.Link className={styles.nav_links} href="/admin">Admin</Nav.Link>
            <Nav.Link className={styles.nav_links} href="/metrics">Metrics</Nav.Link>
          </Nav>
          <Nav>
          <Link to="/login"><Button variant="danger" type="submit"><LogoutSVG fillcolor="white" size="25"/> Logout</Button></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}

export default NavBar;