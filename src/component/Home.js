import React from 'react'
import fire from '../config/fire'
import Carousel from 'react-bootstrap/Carousel'
import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap'
import { BrowserRouter as Router } from "react-router-dom";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBMask,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBAnimation
  } from "mdbreact";


const Home = props => {

    const logout = () => {

        fire.auth().signOut();
    }


    return (

        

<div id="classicformpage">
        <Router>
          <div>
            <MDBNavbar dark expand="md" fixed="top">
                <MDBNavbarBrand>
                  <strong className="white-text">ไปเที่ยวกาน</strong>
                </MDBNavbarBrand>    
            </MDBNavbar>   
          </div>
        </Router>



            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://s359.kapook.com/pagebuilder/8c6127fd-cabb-4ca6-b386-8009327dcef7.jpg" alt="picture" width="150" height="750"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>เสม็ดนางชี </h3>
                        <p>ตั้งอยู่ที่ ทางหลวงแผ่นดินหมายเลข 2331 (อยู่ในอุทยานแห่งชาติภูหินร่องกล้า) กกสะทอน , ด่านซ้าย , เลย </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.wongnai.com/p/1920x0/2018/05/16/9777aa01f05c4662aa2787d321644a62.jpg" alt="picture" width="150" height="750"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>เขตรักษาพันธุ์สัตว์ป่าภูเขียว</h3>
                        <p>ตั้งอยู่ที่ ทางหลวงหมายเลข 2359 หนองบัวแดง , หนองบัวแดง , ชัยภูมิ</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.sabaiatkan.com/wp-content/uploads/2014/11/erawan-waterfall-3.jpg" alt="picture" width="150" height="750"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>น้ำตกเอราวัณ</h3>
                        <p>ตั้งอยู่ที่ ซอย หัวหิน 61 ถนน ดำเนินเกษม (ใช้ทางหลวงหมายเลข 4 (เพชรเกษม) ผ่านจังหวัดนครปฐม จังหวัดราชบุรี จังหวัดเพชรบุรี) หัวหิน , หัวหิน , ประจวบคีรีขันธ์ </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>



            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/page_home">หน้าแรก</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/page_guide">แนะนำ</Nav.Link>
                        <Nav.Link href="/page_change"> แลกเปลี่ยน </Nav.Link>
                        <Nav.Link href="/page_aboutme">เกี่ยวกับฉัน</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                        <Button onClick={logout}>logout</Button>
                    </Form>
                </Navbar>



               


                
            </div>
        </div>
    )


}

export default Home;