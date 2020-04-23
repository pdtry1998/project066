import React from 'react';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

const Topguide2 = () => {
    return (
        
        <MDBCard
        className="my-5 px-5 mx-auto"
        style={{ fontWeight: 300, maxWidth: "90%" }}
      >
        <MDBCardBody style={{ paddingTop: 0 }}>
          <h2 className="h1-responsive font-weight-bold my-5 text-center">
            Section title
          </h2>
          <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit id
            laborum.
          </p>
          <MDBRow>
            <MDBCol md="12" lg="6">
              <div className="mb-4">
                <MDBView hover rounded className="z-depth-1-half mb-4">
                  <img
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Slides/1.jpg"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" className="waves-light" />
                  </a>
                </MDBView>
                <div className="d-flex justify-content-between">
                  <a href="#!" className="deep-orange-text">
                    <h6 className="font-weight-bold">
                      <MDBIcon icon="utensils" className="pr-2" />
                      Culinary
                    </h6>
                  </a>
                  <p className="font-weight-bold dark-grey-text">
                    <MDBIcon far icon="clock" className="pr-2" />
                    27/02/2018
                  </p>
                </div>
                <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                  <a href="#!">Title of the news</a>
                </h3>
                <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">
                  Sed ut perspiciatis unde voluptatem omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae explicabo. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                </p>
              </div>
            </MDBCol>

            <MDBCol md="12" lg="6">
              
              <div className="mb-4">
                <MDBRow>
                  <MDBCol md="7">
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="5">
                    <p className="font-weight-bold dark-grey-text">
                      23/02/2018
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Duis aute irure dolor in reprehenderit in voluptate
                        </a>
                      </MDBCol>
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
                        src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                        alt=""
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                  </MDBCol>
                  <MDBCol md="5">
                    <p className="font-weight-bold dark-grey-text">
                      23/02/2018
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                        <a href="#!" className="dark-grey-text">
                          Duis aute irure dolor in reprehenderit in voluptate
                        </a>
                      </MDBCol>
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

export default Topguide2;