import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ListGroup, Carousel } from 'react-bootstrap';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';



export default props => {

   const { editshow } = props
   const { id, imgUrl1, placetName, district, province,  sector, time, reviews} = editshow

   
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    };
    const hideModal = () => {
        setIsOpen(false);
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        
        <li>
        <div >
            <MDBRow >
      <MDBCol md="3">
        <MDBCard>
          <img
                className="d-block w-100"
                src={imgUrl1}
                style={{ height: 250, width: 330 }}
            />
          <MDBCardBody className='elegant-color white-text rounded-bottom'>
           
            <MDBCardText>
                <h3 className="white-text font-weight-light mb-1 p-0">
                    <strong>
                   
                        ชื่อสถานที่ : {placetName} <br />
                        อำเภอ : {district} <br />
                        จังหวัด: {province} <br />
                        ภาค: {sector} <br />
                        เวลาเปิด - ปิด : {time} <br />
                        รีวิว : {reviews } <br />
                    </strong>
                </h3>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <br />
                
            </div>
        </li>
    )


}
