import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import RatingPage from './rating';
import ReviewType from './reviewtype';



function AddReview () {
    return (
        <div>
            <Form className="form">
            <h1>Write a Review Of ......</h1>
            <Form.Group controlId="overallRating">
                    <Form.Label className="form-text">Overall Rating</Form.Label>
                    <RatingPage/>
            </Form.Group> <br/>

            <Form.Group controlId="reviewtitle">
                    <Form.Label className="form-text">Title</Form.Label>
                    <Form.Control type="text" placeholder="If you could say it one sentence, What would you say?" /> <br/>
                    <Form.Label className="form-text">Type of Your Review</Form.Label>
                    <ReviewType/> <br/>
                    <Form.Label className="form-text">Your Review</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Write your Review" />
            </Form.Group>

            <Form.Group>
                <Form.Label className="form-text">Upload Image</Form.Label>
                <Form.File/>
            </Form.Group>

            <Button variant="primary" type="submit">Submit Review</Button>
            </Form>

        </div>
    )
}

export default AddReview