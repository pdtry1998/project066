import React, { useState, useEffect } from 'react';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import Footer from './Footer'

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
    <div>
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Reviews
        </h2>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src={imgUrl1}
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="utensils" className="pr-2" />
                Travel
              </h6>
            </a>
            <h3 className="black-text font-weight-light mb-1 p-0">
                    - ชื่อสถานที่ :  {placetName}<br />
                    - อำเภอ :{district} <br />
                   - จังหวัด: {province} <br />
                   - ภาค: {sector} <br />
                   - เวลาเปิด - ปิด : {time} <br />
                   - รีวิว : {reviews } <br />
                </h3>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
 
    </div>
  );
}

