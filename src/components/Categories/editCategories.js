import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function EditCategories () {
    return (
        <div>
            <Form className="form">
            <h2> Edit Category</h2>
            <Form.Group controlId="addcategory">
                    <Form.Control type="text" placeholder="Category Name" />
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default EditCategories