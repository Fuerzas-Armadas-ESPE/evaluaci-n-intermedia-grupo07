import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { supabase } from './supabaseClient';

function ProductRow({ product, onDelete, onUpdate }) {
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [tema, setTema] = useState(product.tema);
    const [pendiente, setPendiente] = useState(product.pendiente);

    async function updateProduct() {
        try {
            const { data, error } = await supabase
                .from("products")
                .update({
                    name: name,
                    description: description,
                    tema: tema,
                    pendiente: pendiente
                })
                .eq("id", product.id);

            if (error) throw error;
            window.location.reload();
        } catch (error) {
            alert(error.message);
        }
    }

    async function deleteProduct() {
        try {
            const { data, error } = await supabase
                .from("products")
                .delete()
                .eq("id", product.id);

            if (error) throw error;
            onDelete();
        } catch (error) {
            alert(error.message);
        }
    }

    function togglePendiente() {
        setPendiente(!pendiente);
    }

    return (
        <tr className='text-center'>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.tema}</td>
            <td>
                {/* Agregar la columna "Pendiente" con el checkbox y la lógica para cambiar la palabra */}
                <Form.Check
                    type="checkbox"
                    label={pendiente ? "Realizado" : "Pendiente"}
                    checked={pendiente}
                    onChange={() => togglePendiente()}
                />
            </td>
       
            <td>
                {editing === false ? (
                    <>
                        <Button variant="danger" onClick={() => deleteProduct()}>
                            Borrar
                        </Button>
                        <Button variant="success" onClick={() => setEditing(true)}>
                            Editar
                        </Button>
                    </>
                ) : (
                    <>
                        <h4>Editar Tarea</h4>
                        <Button size="sm" onClick={() => setEditing(false)}>Regresar</Button>
                        <br></br>
                        <Form.Label>Nombre de la Tarea</Form.Label>
                        <Form.Control
                            type="text"
                            id="name"
                            defaultValue={product.name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Form.Label>Descripcion de la Tarea</Form.Label>
                        <Form.Control
                            type="text"
                            id="description"
                            defaultValue={product.description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <Form.Label>Tema de Tarea</Form.Label>
                        <Form.Control
                            type="text"
                            id="tema"
                            defaultValue={product.tema}
                            onChange={(e) => setTema(e.target.value)}
                        />
                         
                        <br></br>
                        <Button onClick={() => updateProduct()}>Actualizar</Button>
                    </>
                )}
            </td>
        </tr>
    );
}

export default ProductRow;
