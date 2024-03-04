import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

 
import Login from '../Login';

function Navegacion() {
  
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Programacion Integrativa</Navbar.Brand>
          <Nav>
             
            <Nav.Item>
              <Link to="/ " className="nav-link">Login</Link>
            </Nav.Item>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar ..."
              className="mr-2"
              //onChange={(e) => searchProducts(e.target.value)}
            />
            <Button variant="outline-light">Buscar</Button>
          </Form>
        </Container>
      </Navbar>

      <Routes>
         
        <Route path="/" element={<Login/>} />

       
      </Routes>
    </Router>
  )
}

export default Navegacion;