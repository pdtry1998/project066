import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView } from "mdbreact";

export default props => {

  const { editshow } = props
  const { imgUrl1, placetName, district, province, sector, time, reviews } = editshow

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
              <h4 className="black-text font-weight-bold mb-1 p-0">
                - ชื่อสถานที่ :  <strong>{placetName}</strong><br />
                    - อำเภอ :<strong>{district}</strong> <br />
                   - จังหวัด: <strong>{province}</strong> <br />
                   - ภาค: <strong>{sector}</strong> <br />
                   - เวลาเปิด - ปิด : <strong>{time}</strong> <br />
                   - รีวิว : <strong>{reviews}</strong> <br />
              </h4>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </div>
  );
  
}

