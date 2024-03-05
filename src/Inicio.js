import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function Inicio() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md="8">
          <h1 className="display-4">Bienvenido a el Sistema de Gestión de Curso para
 Docentes</h1>
          <p className="lead">Este proyecto es la aplicacion de conocimientos de la materia </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Inicio;
