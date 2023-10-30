import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary  navbar" >
                <Container>
                    <Navbar.Brand href="#home">
                    <div>
                        <img src= {logo} alt="logo" className="logo"/>
                        <span className="brand">FitFinity</span>
                    </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" bg="yellow" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto navbar">
                    
                        <div>
                        <ul className="nav-links">
                            <Link to="/"><li className="nav-item">HOME</li></Link>
                            <Link to="/program"><li className="nav-item">PROGRAMS</li></Link>
                            <Link to="/product"><li className="nav-item">PRODUCTS</li></Link>                            
                            <Link to="/about"><li className="nav-item">ABOUT</li></Link>
                            {/* <Link to="/admin"><li className="nav-item">ADMIN</li></Link> */}
                                           
                        </ul>
                        </div>
                    </Nav>
                    <div className="joinFormBtn">
                       <Link to="/join" className="font-color"> <button  className="nav-join-btn">Join Us</button></Link>     
                    </div>
                    
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};
export default NavBar;

