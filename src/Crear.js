import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, Row, Col, Button, TabContainer } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

function Crear() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tema, setTema] = useState("");  // Agregamos el estado para el campo "tema"

  async function createProduct() {
    try {
      const { data, error } = await supabase
        .from("products")
        .insert({
          name: name,
          description: description,
          tema: tema  // Incluimos el campo "tema" en el insert
        })
        .single();

      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center">
        <Col xs={12} md={6}>
          <h3>Crear Actividad</h3>
          <Form.Label>Nombre de la Tarea </Form.Label>
          <Form.Control
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Form.Label>Descripcion de la Tarea</Form.Label>
          <Form.Control
            type="text"
            id="description"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <Form.Label>Tema de la Tarea</Form.Label>
          <Form.Control
            type="text"
            id="tema"
            onChange={(e) => setTema(e.target.value)}
            required
          />
          <br></br>
          <Button type="button" onClick={() => createProduct()}>Crear</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Crear;
