import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddCategories () {
    return (
        <div>
            <Form className="form">
            <h2>Add New Category</h2>
            <Form.Group controlId="addcategory">
                    <Form.Control type="text" placeholder="Category Name" />
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
            </Form>
            

        </div>
    )
}

export default AddCategories