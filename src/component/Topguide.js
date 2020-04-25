import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView } from "mdbreact";

const Topguide = () => {

  return (

    <MDBCard
      className="my-5 px-5 mx-auto"
      style={{ fontWeight: 300, maxWidth: "90%" }}
    >
      <MDBCardBody style={{ paddingTop: 0 }}>
        <h2 className="h1-responsive font-weight-bold my-5 text-center">
          ภูเขา
          </h2>
        <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
          ชวนแพ็คกระเป๋าพิชิตยอดดอย สัมผัสธรรมชาติบนจุดสูง ชมทิวทัศน์ระฟ้า
          กลางสายหมอก กับ 3 อันดับ ยอดเขาที่สูงที่สุดในประเทศไทย
          ใครรักการผจญภัย เชื่อว่าอย่างน้อยหนึ่งดอยต้องเคยไปสอยมาแล้ว!
          </p>
        <MDBRow>
          <MDBCol md="12" lg="6">
            <div className="mb-4">
              <MDBView hover rounded className="z-depth-1-half mb-4">
                <img
                  className="img-fluid"
                  src="https://www.thairath.co.th/media/HCtHFA7ele6Q2dULxQHo7L050BSosjICImTh8ts5B4x6T2txj4J5it4TDXimFjTszi.jpg"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" className="waves-light" />
                </a>
              </MDBView>
              <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                <a href="#!"> ดอยอินทนนท์</a>
              </h3>
              <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">
                ดอยอินทนนท์ มีความสูงถึง 2,600 เมตร มีพื้นที่ครอบคลุมอยู่ในท้องที่อำเภอดอยหล่อ
                อำเภอจอมทอง และ อำเภอแม่แจ่ม จังหวัดเชียงใหม่ ประกอบไปด้วยภูเขาสูงสลับซับซ้อน
                เป็นส่วนหนึ่งของเทือกเขาหิมาลัย พาดผ่านจากประเทศเนปาล ภูฐาน พม่า เป็น ยอดเขาที่สูงที่สุดในประเทศไทย
                เป็นหนึ่งในสถานที่ท่องเที่ยวที่ได้รับความนิยมที่สุดในหมู่คนไทยและเทศ
                </p>
            </div>
          </MDBCol>

          <MDBCol md="12" lg="6">
            <div className="mb-4">
              <MDBRow>
                <MDBCol md="6">
                  <MDBView hover rounded className="z-depth-1-half mb-4">
                    <img
                      className="img-fluid"
                      src="https://sites.google.com/site/wichaihom1108/_/rsrc/1478081710712/home/cheiynghim/15thi-thxng-theiyw-khxng-cheiynghim-thi-txng-pi/dxy-phahm-pk/%E0%B8%AB%E0%B9%88%E0%B8%A1%E0%B8%9B%E0%B8%812.jpg"
                      alt=""
                    />
                    <a href="#!">
                      <MDBMask overlay="white-slight" className="waves-light" />
                    </a>
                  </MDBView>
                </MDBCol>
                <MDBCol md="5">
                  <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                    <a href="#!">ดอยผ้าห่มปก</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">
                      ดอยผ้าห่มปก หรือ ดอยฟ้าห่มปก  เป็นยอดเขายอดหนึ่งบนเทือกเขาแดนลาว
                      มีความสูงถึง 2,285 เมตร
                      เหตุที่เรียกว่า ดอยผ้าห่มปก เนื่องจากต้นไม้บนเทือกเขาแห่งนี้ถูกปกคลุมไปด้วย “มอส” ดูเหมือนมีผ้ามาห่มต้นไม้ไว้
                </p>
                    <a href="#!">
                      <MDBIcon icon="angle-double-right" />
                    </a>
                  </div>
                </MDBCol>
              </MDBRow>
            </div>

            <div className="mb-4">
              <MDBRow>
                <MDBCol md="7">
                  <MDBView hover rounded className="z-depth-1-half mb-4">
                    <img
                      className="img-fluid"
                      src="https://www.trekkingthai.com/wp-content/uploads/2014/10/20161228_170621_0045.jpg"
                      alt=""
                    />
                    <a href="#!">
                      <MDBMask overlay="white-slight" className="waves-light" />
                    </a>
                  </MDBView>
                </MDBCol>
                <MDBCol md="5">
                  <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                    <a href="#!">ดอยหลวงเชียงดาว</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">
                      ดอยหลวงเชียงดาว มีความสูงถึง 2,195 เมตร อยู่ในเขตรักษาพันธุ์สัตว์ป่าดอยเชียงดาว
                      จังหวัดเชียงใหม่ เป็นดอยที่มีความสวยโดดเด่นและแปลกตา มีทะเลหมอกที่สวยงาม
                </p>
                    <a href="#!">
                      <MDBIcon icon="angle-double-right" />
                    </a>
                  </div>
                </MDBCol>
              </MDBRow>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default Topguide;