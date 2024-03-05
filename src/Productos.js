import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import ProductCard from './productCard';
function Productos() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, [])
  async function getProducts() {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .limit(10)
      if (error) throw error;
      if (data != null) {
        setProducts(data); // [product1,product2,product3]
      }
    } catch (error) {
      alert(error.message);
    }
  }
  
  return (
    <div>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Tareas Asignadas</Navbar.Brand>
           
           
        </Container>
      </Navbar>
      <h4 className='text-center'></h4>
    <Container>
        <table className="table text-center">
          <thead className="table-dark">
            <tr>
              <th>Tarea</th>
              <th>Descripción</th>
              <th>Tema</th>
              <th>Estado</th>
              
              <th>Acciones</th>
            </tr>
          </thead>
          </table>


          <table className="table">

           
          {products.map((product) => (
            <tbody key={product.id}>
              <ProductCard product={product} /> 
            </tbody>
          ))}
           
         </table>
        
      </Container>
      </div>
  )
}

export default Productos