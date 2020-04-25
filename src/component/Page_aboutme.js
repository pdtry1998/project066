import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBCard } from "mdbreact";
import { Button } from 'reactstrap';
import Bar from './Bar'
import Footer from './Footer'

const Aboutme = () => {

  return (

    <div>
      <Bar />
      <MDBCard
        className="my-5 px-5 mx-auto"
        style={{ fontWeight: 500, maxWidth: "50%" }}
      >
        <section className="my-4">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Profile
        </h2>
          <MDBRow>
            <MDBCol lg="5" className="text-center text-lg-left">
              <img
                className="img-fluid"
                src="https://scontent.fbkk4-3.fna.fbcdn.net/v/t1.0-9/p960x960/78642317_1389157154591111_6428770734427865088_o.jpg?_nc_cat=100&_nc_sid=13bebb&_nc_eui2=AeEGcu42_qqq1bs0UEgaerWaPHzaLRkNhr08fNotGQ2GvaH6xB3MwzSklm9uqDgrFvIDH-ighBLRoBcE6iEoePux&_nc_ohc=gqaT-80WfgoAX_6vHp2&_nc_ht=scontent.fbkk4-3.fna&_nc_tp=6&oh=b632a4629d55d030d310616dccced12d&oe=5EC5C292"
                alt=""
              />
            </MDBCol>
            <MDBCol lg="7">
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon icon="share" size="lg" className="indigo-text" />
                </MDBCol>
                <MDBCol xl="10" md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Personal information</h5>
                  <p className="grey-text">
                    Name : Mr.Teeryut Saetee
                    ID   : 6035512066
                </p>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mb-3">
                <MDBCol size="1">
                  <MDBIcon icon="share" size="lg" className="indigo-text" />
                </MDBCol>
                <MDBCol xl="10" md="11" size="10">
                  <h5 className="font-weight-bold mb-3">FOLLOW US</h5>
                  <p className="grey-text">
                    <Button color="blue" size="sm" href="https://web.facebook.com/profile.php?id=100004905195568">Face Book</Button>
                    <Button color="red" size="sm" href="https://mail.google.com/mail/u/1/#inbox">Mail</Button>
                    <Button color="dark" size="sm" href="https://github.com/pdtry1998">github</Button>
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBCard>
      <div> <Footer /></div>
    </div>
  );
}

export default Aboutme;