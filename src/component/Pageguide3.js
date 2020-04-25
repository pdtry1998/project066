import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView } from "mdbreact";

const Pageguide3 = () => {

  return (

    <MDBCard
      className="my-5 px-5 mx-auto"
      style={{ fontWeight: 300, maxWidth: "90%" }}
    >
      <MDBCardBody style={{ paddingTop: 0 }}>
        <h2 className="h1-responsive font-weight-bold my-5 text-center ">
          วัด
          </h2>
        <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
          เที่ยว นั่น นี่ โน่น มาก็มาก แต่จะว่าไปยังไม่ได้พูดถึงวัดกันสักเท่าไหร่ ทั้งๆที่เมืองไทยเป็น
          “เมืองพุทธ” วันนี้เราจะพาเที่ยววัดธรรมดาทั่วไป งานนี้ขอคัดมาแบบเน้นๆ เอาที่สวย  เจิดสุดรับรองว่า งานนี้ต้องตื่นตากับความงามแน่นอน
          </p>
        <MDBRow>
          <MDBCol md="12" lg="6">
            <div className="mb-4">
              <MDBView hover rounded className="z-depth-1-half mb-4">
                <img
                  className="img-fluid"
                  src="https://r-cf.bstatic.com/images/hotel/max1024x768/210/210300157.jpg"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" className="waves-light" />
                </a>
              </MDBView>
              <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                <a href="#!">วัดพระแก้ว</a>
              </h3>
              <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">
                เรียกว่าเป็นวัดที่สำคัญและเป็นที่เชิดหน้าชูตาของบ้านเมือง ตลอดจนเป็นแหล่งท่องเที่ยวที่สำคัญของประเทศไทย
                สำหรับ วัดพระศรีรัตนศาสดาราม หรือ วัดพระแก้ว  พระอารามหลวงชั้นพิเศษ
                ที่ตั้งอยู่ตรงมุมด้านตะวันออกเฉียงเหนือของพระบรมมหาราชวัง อีกทั้งยังเป็นที่ประดิษฐาน พระมหามณีรัตนปฏิมากร
                หรือ พระแก้วมรกต รวมถึงใช้เป็นที่ประกอบพระราชพิธีทางศาสนาที่สำคัญ
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
                      src="https://pbs.twimg.com/media/EPVa47PVUAIdELB.jpg"
                      alt=""
                    />
                    <a href="#!">
                      <MDBMask overlay="white-slight" className="waves-light" />
                    </a>
                  </MDBView>
                </MDBCol>
                <MDBCol md="5">
                  <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                    <a href="#!">พระมหาเจดีย์ชัยมงคล จ.ร้อยเอ็ด </a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">
                      จากภายนอกตัวอาคารเป็นพื้นสีขาวตกแต่งลวดลายด้วยสีทองเหลืองอร่าม
                      ดูวิจิตรตระการตา บริเวณโดยรอบรายล้อมด้วยเจดีย์องค์เล็กทั้ง 8 ทิศ ภายในองค์พระมหาเจดีย์ ตกแต่งอย่างสวยงามเหมือนอยู่บนวิมานแดนสวรรค์
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
                      src="https://guide.pureriwater.com/wp-content/uploads/2019/04/%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%A3%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%82%E0%B8%B8%E0%B9%88%E0%B8%992.jpg"
                      alt=""
                    />
                    <a href="#!">
                      <MDBMask overlay="white-slight" className="waves-light" />
                    </a>
                  </MDBView>
                </MDBCol>
                <MDBCol md="5">
                  <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                    <a href="#!">วัดร่องขุน</a>
                  </h3>
                  <div className="d-flex justify-content-between">
                    <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">
                      วัดร่องขุ่น (Wat Rong Khun) ออกแบบและก่อสร้างโดยอาจารย์เฉลิมชัย โฆษิตพิพัฒน์ ซึ่งปรารถนาจะสร้างวัดให้เหมือนเมืองสวรรค์ที่มนุษย์สัมผัสได้
                      เริ่มสร้างตั้งแต่ พ.ศ.2540
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

export default Pageguide3;