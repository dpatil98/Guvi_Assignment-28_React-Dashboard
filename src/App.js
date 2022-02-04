
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Dashboard } from './components/dashboard';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import {Container, FormControl,Form, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

function App() {
  return (
    <div className="App">

    <Appbar/>
    <Dashboard/>
    </div>
  );
}


function Appbar()
{
  return(
    
    // <div className='appbar-container'>
    //   <div>LOGO</div>
    //   <ul>
    //     <li>Home</li>
    //     <li>About</li>
    //     <li>Dashboard</li>
    //     <li>Product</li>
    //   </ul>
    // </div>

<Navbar className='appbar-container' color='white' expand="lg" >
<Container fluid>
  <Navbar.Brand href="#">LOGO</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">

    <Nav
      className="me-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">Product</Nav.Link>
      <Nav.Link href="#action2">Dashboard</Nav.Link>
    </Nav>

    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-light">Search</Button>
    </Form>

  </Navbar.Collapse>
</Container>
</Navbar>
  )
}

export default App;
