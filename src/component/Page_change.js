import React from 'react';
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation
} from 'mdbreact';
import './Pagechange.css';
import Bar from './Bar'
import { useState, useEffect } from 'react';
import { firestore } from '../index'
import Footer from './Footer'

const PageChange = props => {


  const [imgUrl1, SetImgUrl1] = useState('')
  const [placetName, SetplaceName] = useState('')
  const [district, Setdistrict] = useState('')
  const [province, Setprovince] = useState('')
  const [sector, Setsector] = useState('')
  const [time, Settime] = useState('')
  const [reviews, Setreviews] = useState('')
  const [editshow, SetEditshow] = useState([{}])

  useEffect(() => {

    retriveData()

  }, [])

  const retriveData = () => {

    firestore.collection("editshow").onSnapshot(snapshot => {

      console.log(snapshot);

      let editshow = snapshot.docs.map(d => {
        const { id, imgUrl1, placetName, district, province, sector, time, reviews } = d.data()
        console.log(id, imgUrl1, placetName, district, province, sector, time, reviews)
        return { id, imgUrl1, placetName, district, province, sector, time, reviews }
      })

      SetEditshow(editshow)


      })
  }



  const addEditshow = () => {

    let id = (editshow.length === 0) ? 1 : editshow[editshow.length - 1].id + 1
    firestore.collection("editshow").doc(id + '').set({ id, imgUrl1, placetName, district, province, sector, time, reviews })
    alert("Add Finish")
  }

  



  return (

    <div id='classicformpage1'>
      <div><Bar />
      </div>
      <MDBView>
        <MDBMask className='d-flex justify-content-center align-items-center gradient' />
        <MDBContainer
          style={{ height: '70%', width: '100%', paddingTop: '10rem' }}
          className='mt-5  d-flex justify-content-center align-items-center'
        >
          <MDBRow>
            <MDBAnimation
              type='fadeInLeft'
              delay='.3s'
              className='white-text text-center text-md-left col-md-6 mt-xl-5 mb-5'
            >
              <h1 className='h1-responsive font-weight-bold'>
                มาแลกเปลี่ยนกันเถอะ
                </h1>
              <hr className='hr-light' />
              <h6 className='mb-4'>
                เชิญเข้ามาแชร์ข้อมูลประสบการณ์การท่องเที่ยวในประเทศไทย
                ที่ประทับใจของท่านให้เพื่อน ๆ ได้รับรู้กันเถอะ โดยกรอกผ่านฟอร์มนี้ได้เลย
                </h6>
              <img
                className="img-fluid rounded-circle hoverable"
                src="https://www.tatreviewmagazine.com/wp-content/uploads/2018/07/pic3-2018_08_01.jpg"
                alt=""
              />
            </MDBAnimation>

            <MDBCol md='6' xl='6' className='mb-4'>
              <MDBAnimation type='fadeInRight' delay='.3s'>
                <MDBCard id='classic-card'>
                  <MDBCardBody className='white-text'>
                    <h3 className='text-center'>
                      <MDBIcon icon='user' /> กรอกรายละเอียด :
                      </h3>
                    <hr className='hr-light' />
                    <MDBInput
                      className='white-text'
                      iconClass='white-text'
                      label='Image URL  : รูปภาพ'
                      name="imgUrl1"
                      id="imgUrl1"
                      onChange={(e) => SetImgUrl1(e.target.value)}
                    />
                    <MDBInput
                      className='white-text'
                      iconClass='white-text'
                      label='Name  : ชื่อสถานที่'
                      name="placename"
                      id="placename"
                      onChange={(e) => SetplaceName(e.target.value)}
                    />
                    <MDBInput
                      className='white-text'
                      iconClass='white-text'
                      label='District  : อำเภอ'
                      name="district"
                      id="district"
                      onChange={(e) => Setdistrict(e.target.value)}
                    />
                    <MDBInput
                      className='white-text'
                      iconClass='white-text'
                      label='Province : จังหวัด'
                      name="province"
                      id="province"
                      onChange={(e) => Setprovince(e.target.value)}
                    />
                    <MDBInput
                      className='white-text'
                      iconClass='white-text'
                      label='Sector : ภาค'
                      name="sector"
                      id="sector"
                      onChange={(e) => Setsector(e.target.value)}
                    />
                    <MDBInput
                      className='white-text'
                      iconClass='white-text'
                      label='Time : เวลาเปิด - ปิด'
                      name="time"
                      id="time"
                      onChange={(e) => Settime(e.target.value)}
                    />
                    <MDBInput
                      className='white-text'
                      iconClass='white-text'
                      label='Reviews : รีวิว'
                      name="reviews"
                      id="reviews"
                      onChange={(e) => Setreviews(e.target.value)}
                    />
                    <div className='text-center mt-4 ไเระำ-text'>
                      <MDBBtn color="#00bfa5 teal accent-4" onClick={addEditshow}>Send</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBView>
      <div><Footer /></div>
    </div>
  );
}

export default PageChange;