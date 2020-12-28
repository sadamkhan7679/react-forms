import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function AuthForm (){
    const [authform, setauthform] = useState(true)

    const handleClick = () => {
        if (authform){setauthform(false)} else {setauthform(true)} 
    }

    function Login() {
      return (
      <div>        
            <Form className="authForm">
            <h1>Login Formmmm </h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email address" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="passwor" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">Sign In</Button>

                <Form.Text className="text-muted">
                    New User? <Link onClick = {handleClick}>Register Here</Link>
                </Form.Text> 
            </Form>
    </div>
    )  
}

    function Register() { 
    return (
    <div>
        <Form className="authForm">
        <h1>Register Form</h1>
            <Form.Group controlId="formBasicFname">
                <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
            <Form.Group controlId="formBasicLname">
                <Form.Control type="text" placeholder="Last Name"/>
            </Form.Group>
            <Form.Group controlId="formBasicUname">
                <Form.Control type="text" placeholder="Username" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCPassword">
                <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>

            <Button variant="primary" type="submit">Sign In</Button>

            <Form.Text className="text-muted">
                Already have an Account? <Link onClick = {handleClick}>Sign In</Link>
            </Form.Text> 
        </Form>

    </div>
    )
    }




    return (
        <div>
            {authform ? (<Login/>) : (<Register/>)}
        </div>
    )
}


export default AuthForm