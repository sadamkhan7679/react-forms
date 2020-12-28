import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function AddStatus () {
    return (
        <div>
            <Form className="form">
            <h1>Add Status</h1>
            <Form.Group controlId="statusTitle">
                    <Form.Control type="text" placeholder="Status Title" />
            </Form.Group>

            <Form.Group controlId="statusDescription">
                    <Form.Control type="text" placeholder="Status Description" />
            </Form.Group>

            <Form.Group>
                <Form.Label className="form-text">Upload Image</Form.Label>
                <Form.File/>
            </Form.Group>

            <Button variant="primary" type="submit">Add Status</Button>
            </Form>
        </div>
    )
}

export default AddStatus