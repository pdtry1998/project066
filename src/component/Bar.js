import React from 'react'
import fire from '../config/fire'
import Carousel from 'react-bootstrap/Carousel'
import { Navbar, Nav,Form } from 'react-bootstrap'
import {MDBBtn,} from "mdbreact";


const Bar = (props) => {

    const logout = () => {

        fire.auth().signOut();
    }

    return (

        <div id="classicformpage">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://s359.kapook.com/pagebuilder/8c6127fd-cabb-4ca6-b386-8009327dcef7.jpg" alt="picture" width="150" height="800"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>เสม็ดนางชี </h3>
                        <p>ตั้งอยู่ที่ ตำบล คลองเคียน อำเภอตะกั่วทุ่ง พังงา 82130 </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://ภาพวิว.com/wp-content/uploads/2018/09/JBK-7.jpg" alt="picture" width="150" height="800"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>วัดพระแก้ว</h3>
                        <p>ตั้งอยู่ที่ ถนน หน้าพระลาน แขวง พระบรมมหาราชวัง เขตพระนคร กรุงเทพมหานคร 10200</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://pbs.twimg.com/media/DuBYYUFUcAAuBnC.jpg" alt="picture" width="150" height="800"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>ทุ่งทานตะวันเขาจีนแล</h3>
                        <p>ตั้งอยู่ที่ ตำบลนิคมสร้างตนเอง อำเภอเมืองลพบุรี ลพบุรี 15000 </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div>
                <Navbar bg="#1c2331 mdb-color darken-4 " variant="dark ">
                    <Navbar.Brand href="/page_home">หน้าแรก</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/page_guide">แนะนำ</Nav.Link>
                        <Nav.Link href="/page_change"> แลกเปลี่ยน </Nav.Link>
                        <Nav.Link href="/page_show"> Reviews </Nav.Link>
                        <Nav.Link href="/page_aboutme">เกี่ยวกับฉัน</Nav.Link>
                    </Nav>

                    <Form inline>
                        <MDBBtn rounded color="danger" onClick={logout}>logout</MDBBtn>                    
                    </Form>
                </Navbar>
            </div>
        </div>
    )
}

export default Bar;