import  React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


function NavBar() {


    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <NavLink className="navlink" to="/">Auth</NavLink>
                        <NavLink className="navlink" to="/addbusiness">Add Business </NavLink>
                        <NavLink className="navlink" to="/editbusiness">Edit Business</NavLink>
                        <NavLink className="navlink" to="/addcategory">Add Category </NavLink>
                        <NavLink className="navlink" to="/editcategory">Edit Category  </NavLink>
                        <NavLink className="navlink" to="/addstatus">Add Status</NavLink>
                        <NavLink className="navlink" to="/addreview">Add Review</NavLink>
                        <NavLink className="navlink" to="/editreview">Edit Review </NavLink>
                </Nav>
            </Navbar>
        </div>
    )
    
}

export default NavBar