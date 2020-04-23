import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import { MDBCardImage, MDBCardTitle, MDBCardText, MDBCardGroup } from 'mdbreact';
import {Button} from 'reactstrap';

const Lower = () => {
    return (
        <div>
            <span class="d-block p-4 #546e7a blue-grey darken-1 accent-4 text-white h4-responsive ">
            แนะนำ</span>
            <section className="text-left my-5">
                <MDBRow className="text-center">
                    <MDBCol lg="3" md="12" className="mb-lg-0 mb-4">
                        <MDBView className="overlay rounded z-depth-1" waves>
                            <img
                                src="https://blog.traveloka.com/source/uploads/sites/5/2019/10/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%98%E0%B8%B2%E0%B8%95%E0%B8%B8%E0%B8%99%E0%B8%A0%E0%B9%80%E0%B8%A1%E0%B8%97%E0%B8%99%E0%B8%B5%E0%B8%94%E0%B8%A5-800x534.jpg"
                                alt=""
                                className="img-fluid"
                            />
                            <a href="#!">
                                <MDBMask overlay="white-slight" />
                            </a>
                        </MDBView>
                        <MDBCardBody className="pb-0">
                            <h4 className="font-weight-bold my-3">ดอยอินทนนท์</h4>
                            <p className="grey-text">
                            “ดอยอินทนนท์” ยอดเขาที่สูงที่สุดในประเทศไทย ถือเป็นอีกหนึ่งแลนด์มาร์คสำคัญในจังหวัดเชียงใหม่
                            รียกได้ว่าเป็นสถานที่ท่องเที่ยวยอดฮิตอันดับต้น ๆ ของภาคเหนือเลยก็ว่าได้ 
                            </p>
                           
                            <Button color="black" size="m" href="https://travel.mthai.com/region/north/99627.html">read more</Button>
                        
                        </MDBCardBody>
                    </MDBCol>


                    <MDBCol lg="3" md="12" className="mb-lg-0 mb-4">
                        <MDBView className="overlay rounded z-depth-1" waves>
                            <img
                                src="https://s.isanook.com/tr/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3RyLzAvdWQvMjgzLzE0MTc0MTUvYWhyMGNobTZseTl6bG1senl3NXZiMnN1eTI5dGxfNC5qcGc=.jpg"
                                alt=""
                                className="img-fluid"
                            />
                            <a href="#!">
                                <MDBMask overlay="white-slight" />
                            </a>
                        </MDBView>
                        <MDBCardBody className="pb-0">
                            <h4 className="font-weight-bold my-3">เขาใหญ่</h4>
                            <p className="grey-text">
                            "เขาใหญ่" สถานที่ท่องเที่ยวทางธรรมชาติที่ฮิตมาเนิ่นนาน การได้นั่งรถผ่านเส้นทางของอุทยานฯที่คดเคี้ยวระหว่างทางร่มรื่น 
                            ป็นอีกหนึ่งวิถีการท่องเที่ยวที่แสนจะสุขสำราญใจ
                            </p>
                            <Button color="black" size="m" href="https://www.sanook.com/travel/947674/">read more</Button>
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
                            <h4 className="font-weight-bold my-3">เขื่อนเชี่ยวหลาน</h4>
                            <p className="grey-text">
                                Temporibus autem quibusdam et aut officiis debitis aut rerum
                                necessitatibus saepe eveniet ut et voluptates repudiandae.
                            </p>
                            <Button color="black" size="m" href="https://www.bangkokbiznews.com/news/detail/825021">read more</Button>
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
                            <h4 className="font-weight-bold my-3">หาดป่าตอง</h4>
                            <p className="grey-text">
                                Temporibus autem quibusdam et aut officiis debitis aut rerum
                                necessitatibus saepe eveniet ut et voluptates repudiandae.
                             </p>
                             <Button color="black" size="m" href="https://www.bangkokbiznews.com/news/detail/825021">read more</Button>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </section>

         


        </div>

    );
}

export default Lower;