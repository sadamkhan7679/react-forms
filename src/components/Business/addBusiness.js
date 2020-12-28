import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';


function AddBusiness () {
    return (
        <div>
            <Form className="businessForm"> 
                <h2>Add New Business</h2> 
                <Form.Row>
                    <Col> <Form.Control placeholder="Select Business Category" /> </Col>
                    <Col> <Form.Control placeholder="Company Name" /> </Col>
                </Form.Row>
                <Form.Row>
                    <Col> <Form.Control placeholder="First Name" /> </Col>
                    <Col> <Form.Control placeholder="Last Name" /> </Col>
                </Form.Row>
                <Form.Row>
                    <Col> <Form.Control placeholder="Email" /> </Col>
                    <Col> <Form.Control placeholder="Company Location" /> </Col>
                </Form.Row>
                <Form.Row>
                    <Col> <Form.Control placeholder="Phone No" /> </Col>
                    <Col> <Form.Control placeholder="Nature of Your Business" /> </Col>
                </Form.Row>
                <Form.Row>
                    <Col> <Form.Control as="textarea" rows={3} placeholder="Business Description" /> </Col>
                </Form.Row>
                <Form.Row>
                    <Col> <Form.Control placeholder="Website" /> </Col>
                    <Col> <Form.File/> </Col>
                </Form.Row>


                <p className="form-text">Add Social links (Optional)</p>
                <Form.Row>
                    <Col> 
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                            <InputGroup.Text><i className="fab fa-facebook"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control placeholder="www.facebook.com"/>
                        </InputGroup> 
                    </Col>
                    <Col> 
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                            <InputGroup.Text><i class="fab fa-twitter-square"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control placeholder="www.twitter.com"/>
                        </InputGroup> 
                    </Col>
                </Form.Row>

                <Button variant="primary" type="submit">Add Business</Button>

            </Form>
            
        </div>
    )
}

export default AddBusiness