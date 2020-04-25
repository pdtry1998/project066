import React from 'react'
import Bar from './Bar';
import Table from './Table'
import Lower from './Lower'
import Footer from './Footer'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBView } from "mdbreact";


const Home = props => {

  return (

    <div>
      <Bar />
      <div>
        <section className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            ยินดีต้องรับเข้าสู่ "ไปเที่ยวกาน"
        </h2>
          <p className="grey-text w-responsive text-center mx-auto mb-5">
            เว็บไซต์นี้จัดทำขึ้นเพื่อ แนะนำสถานที่ท่องเที่ยวภายในประเทศไทย แลกเปลี่ยนการท่องเที่ยวของกันและกัน และเพื่อสนับสนุนการท่องเที่ยวภายในประเทศ
            โดยผู้ใช้สามารถเข้ามาแชร์ประสบการณ์การการท่องเที่ยวของท่านให้ผู้อื่นได้รับรู้ได้ในเว็บไซต์นี้
        </p>
        </section>

        <MDBContainer>
          <MDBRow>
            <MDBCol md="12" className="mb-3">
              <img src="https://kasikornresearch.com/SiteCollectionDocuments/analysis/business/tourism/Th2Th_Banner.jpg" className="img-fluid z-depth-1" alt="" />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol lg="4" md="12" className="mb-3">
              <img src="https://ed.edtfiles-media.com/ud/news/1/140/419059/500rai_Cover-850x567.jpg" className="img-fluid z-depth-1" alt="" />
            </MDBCol>
            <MDBCol lg="4" md="6" className="mb-3">
              <img src="https://images.thaiza.com/37/37_20121226133538..jpg" className="img-fluid z-depth-1" alt="" />
            </MDBCol>
            <MDBCol lg="4" md="6" className="mb-3">
              <img src="https://teawtalay.com/wp-content/uploads/4island-2.jpg" className="img-fluid z-depth-1" alt="" />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="6" className="mb-3">
              <img src="https://2.bp.blogspot.com/-V-XMM40IX9g/V4hz_ip9hhI/AAAAAAAASLc/Mbe2y4hIY8gtTYAM2Px86WF4Im63XyrrQCK4B/s1600/CHOUI%2BFONG%2BTEA3.jpg" className="img-fluid z-depth-1" alt="" />
            </MDBCol>
            <MDBCol md="6" className="mb-3">
              <img src="https://f.ptcdn.info/996/051/000/orxnw0fsc51nGF38fR1-o.jpg" className="img-fluid z-depth-1" alt="" />
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBCard className="my-5 px-5 pb-5">
          <MDBCardBody>
            <MDBRow>
              <MDBCol md="12">
                <MDBCard reverse>
                  <MDBView hover cascade waves>
                    <img
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(142).jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <MDBMask overlay="white-slight" className="waves-light" />
                  </MDBView>
                  <MDBCardBody cascade className="text-center">
                    <h2 className="font-weight-bold">
                      <a href="#!">10 อันดับ จังหวัดที่น่าท่องเที่ยวในไทย </a>
                    </h2>
                    <p>
                      by
                  <a href="#!">
                        <strong>vtreviewpanel</strong>
                      </a>
                  , 26/08/2018
                </p>
                  </MDBCardBody>
                </MDBCard>
                <MDBContainer className="mt-5">
                  <div>
                    <Table />
                  </div>
                </MDBContainer>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>

        <div>
          <Lower />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home;