

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import './Assets/css/home.css';

function Home() {
  return (
    <Container className="Home" flex>
      <Navbar bg="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand style={{color: `white`}}>K-State Web Development Club</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" style={{fontColor: `white`}}/>
          <Navbar.Collapse id="navbar">
            <Nav.Link>Who are we?</Nav.Link>
            <Nav.Link>Our Activities</Nav.Link>
            <Nav.Link>Project Showcase</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Home;
