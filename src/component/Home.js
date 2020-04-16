import React from 'react'
import fire from '../config/fire'
import Carousel from 'react-bootstrap/Carousel'
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap'


const Home = props => {

    const logout = () => {

        fire.auth().signOut();
    }


    return (

        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/originals/bf/2a/e6/bf2ae6b3034c425bc899ad9706a9352c.jpg" alt="picture" width="150" height="750"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.thairath.co.th/media/dFQROr7oWzulq5FZYSgOLp7PKj4egPGY5tcCY8hQCvTLxIoycR3byOEOlC04udPWN4c.jpg" alt="picture" width="150" height="750"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cartoon.mthai.com/app/uploads/2014/04/73.jpg" alt="picture" width="150" height="750"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">ONE PIECE</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Character</Nav.Link>
                        <Nav.Link href="#features"> Seasons </Nav.Link>
                        <Nav.Link href="#pricing">About Me</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                        <Button onClick={logout}>logout</Button>
                    </Form>
                </Navbar>



                <div>

                    <br></br> <button onClick={logout}>logout</button>

                </div>


                
            </div>
        </div>
    )


}

export default Home;