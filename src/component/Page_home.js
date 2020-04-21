import React from 'react'
import Bar from './Bar';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import {   MDBCardImage, MDBCardTitle, MDBCardText,MDBCardGroup } from 'mdbreact';



const PageHome = props => {
  return (
    <div>
      <Bar />
      <div>
        <section className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            ยินดีต้องรับเข้าสู่ "ไปเที่ยวกาน"
        </h2>
          <p className="grey-text w-responsive text-center mx-auto mb-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            est laborum.
        </p>
        </section>

        <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="mb-3">
          <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(137).jpg" className="img-fluid z-depth-1" alt="" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-3">
          <img src="https://mdbootstrap.com/img/Others/documentation/img(115)-mini.jpg" className="img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-3">
            <img src="https://mdbootstrap.com/img/Others/documentation/img(116)-mini.jpg" className="img-fluid z-depth-1" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-3">
            <img src="https://mdbootstrap.com/img/Others/documentation/img(117)-mini.jpg" className="img-fluid z-depth-1" alt="" />
          </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="6" className="mb-3">
          <img src="https://mdbootstrap.com/img/Others/documentation/img(118)-mini.jpg" className="img-fluid z-depth-1" alt="" />
        </MDBCol>
        <MDBCol md="6" className="mb-3">
          <img src="https://mdbootstrap.com/img/Others/documentation/img(129)-mini.jpg" className="img-fluid z-depth-1" alt="" / >
        </MDBCol>
      </MDBRow>
    </MDBContainer>
















    <span class="d-block p-3 bg-dark text-white h4-responsive">Block</span>
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
                      <a href="#!">Title of the news</a>
                    </h2>
                    <p>
                      Written by
                  <a href="#!">
                        <strong>Abby Madison</strong>
                      </a>
                  , 26/08/2018
                </p>
                    <MDBBtn className="btn-fb waves-light">
                      <MDBIcon fab icon="facebook-f" className="pr-2" />
                  Facebook
                </MDBBtn>
                    <span className="counter">46</span>
                    <MDBBtn className="btn-tw waves-light">
                      <MDBIcon fab icon="twitter" className="pr-2" />
                  Twitter
                </MDBBtn>
                    <span className="counter">22</span>
                    <MDBBtn className="btn-gplus waves-light">
                      <MDBIcon fab icon="google-plus-g" className="pr-2" />
                  Google
                </MDBBtn>
                    <span className="counter">31</span>
                    <MDBBtn color="default" className="waves-light">
                      <MDBIcon icon="comments" className="pr-2" />
                  Comments
                </MDBBtn>
                    <span className="counter">18</span>
                  </MDBCardBody>
                </MDBCard>
                <MDBContainer className="mt-5">
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                    praesentium voluptatum deleniti atque corrupti quos dolores et
                    quas molestias excepturi sint occaecati cupiditate non
                    provident, similique sunt in culpa nemo enim ipsam voluptatem
                    quia voluptas sit qui officia deserunt mollitia animi, id est
                    laborum et dolorum fuga quidem rerum facilis est distinctio.
              </p>
                  <p>
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque
                    nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas assumenda est, omnis dolor
                    repellendus. Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur.
                    Temporibus autem quibusdam et aut officiis debitis aut rerum
                    necessitatibus saepe eveniet ut et voluptates repudiandae sint
                    et molestiae non recusandae itaque earum rerum.
              </p>
                </MDBContainer>
              </MDBCol>
            </MDBRow>
            <hr className="mb-5 mt-4" />
            <MDBRow>
              <MDBCol md="12">
                <MDBCard reverse>
                  <MDBView hover cascade waves>
                    <img
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(146).jpg"
                      alt=""
                      className="img-fluid"
                    />
                    <MDBMask overlay="white-slight" className="waves-light" />
                  </MDBView>
                  <MDBCardBody cascade className="text-center">
                    <h2 className="font-weight-bold">
                      <a href="#!">Title of the news</a>
                    </h2>
                    <p>
                      Written by
                  <a href="#!">
                        <strong>Abby Madison</strong>
                      </a>
                  , 21/08/2018
                </p>
                    <MDBBtn className="btn-fb waves-light">
                      <MDBIcon fab icon="facebook-f" className="pr-2" />
                  Facebook
                </MDBBtn>
                    <span className="counter">87</span>
                    <MDBBtn className="btn-tw waves-light">
                      <MDBIcon fab icon="twitter" className="pr-2" />
                  Twitter
                </MDBBtn>
                    <span className="counter">73</span>
                    <MDBBtn className="btn-gplus waves-light">
                      <MDBIcon fab icon="google-plus-g" className="pr-2" />
                  Google
                </MDBBtn>
                    <span className="counter">91</span>
                    <MDBBtn color="default" className="waves-light">
                      <MDBIcon icon="comments" className="pr-2" />
                  Comments
                </MDBBtn>
                    <span className="counter">67</span>
                  </MDBCardBody>
                </MDBCard>
                <MDBContainer className="mt-5">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                    quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem.
              </p>
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam
                    quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corporis suscipit laboriosam, nisi ut
                    aliquid ex ea commodi consequatur? Quis autem vel eum iure
                    reprehenderit qui in ea voluptate velit esse quam nihil
                    molestiae consequatur.
              </p>
                </MDBContainer>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>


<span class="d-block p-3 bg-dark text-white h4-responsive">ข่าวสารการท่องเที่ยว</span>
<section className="text-left my-3">
      
    

          <MDBRow className="text-center">
            <MDBCol lg="3" md="12" className="mb-lg-0 mb-4">
              <MDBView className="overlay rounded z-depth-1" waves>
                <img
                  src="https://blog.bangkokair.com/wp-content/uploads/2018/01/OG-%E0%B8%94%E0%B8%AD%E0%B8%A2%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%99%E0%B8%99%E0%B8%97%E0%B9%8C-1.jpg"
                  alt=""
                  className="img-fluid"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">
                <h4 className="font-weight-bold my-3">Title of the news</h4>
                <p className="grey-text">
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae.
            </p>
                <MDBBtn color="indigo" size="sm">
                  <MDBIcon far icon="clone" className="left" /> MDBView project
            </MDBBtn>
              </MDBCardBody>
            </MDBCol>


            <MDBCol lg="3" md="12" className="mb-lg-0 mb-4">
              <MDBView className="overlay rounded z-depth-1" waves>
                <img
                  src="https://img.wongnai.com/p/1920x0/2018/05/16/9777aa01f05c4662aa2787d321644a62.jpg"
                  alt=""
                  className="img-fluid"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">
                <h4 className="font-weight-bold my-3">Title of the news</h4>
                <p className="grey-text">
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae.
            </p>
                <MDBBtn color="indigo" size="sm">
                  <MDBIcon far icon="clone" className="left" /> MDBView project
            </MDBBtn>
              </MDBCardBody>
            </MDBCol>

            <MDBCol lg="3" md="12" className="mb-lg-0 mb-4">
              <MDBView className="overlay rounded z-depth-1" waves>
                <img
                  src="https://www.sabaiatkan.com/wp-content/uploads/2014/11/erawan-waterfall-3.jpg"
                  alt=""
                  className="img-fluid"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">
                <h4 className="font-weight-bold my-3">Title of the news</h4>
                <p className="grey-text">
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae.
            </p>
                <MDBBtn color="indigo" size="sm">
                  <MDBIcon far icon="clone" className="left" /> MDBView project
            </MDBBtn>
              </MDBCardBody>
            </MDBCol>


            <MDBCol lg="3" md="12" className="mb-lg-0 mb-4">
              <MDBView className="overlay rounded z-depth-1" waves>
                <img
                  src="https://img.wongnai.com/p/1920x0/2019/01/09/9b7925896b09424c98a86e2d16a06eea.jpg"
                  alt=""
                  className="img-fluid"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
              <MDBCardBody className="pb-0">
                <h4 className="font-weight-bold my-3">Title of the news</h4>
                <p className="grey-text">
                  Temporibus autem quibusdam et aut officiis debitis aut rerum
                  necessitatibus saepe eveniet ut et voluptates repudiandae.
            </p>
                <MDBBtn color="indigo" size="sm">
                  <MDBIcon far icon="clone" className="left" /> MDBView project
            </MDBBtn>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </section>

<span class="d-block p-5 bg-dark text-white h4-responsive">#ไปเที่ยวกาน</span>

    

      </div>
    </div>
  )
}

export default PageHome;