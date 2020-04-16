import React from 'react'
import fire from '../config/fire'
import Carousel from 'react-bootstrap/Carousel'


const Home = props => {

const logout = () => {

    fire.auth().signOut();
}

   
    return (
        
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.thairath.co.th/media/dFQROr7oWzulq5FZYSgOLp7PKj4egPGY5tcCY8hQCvTLxIoycR3byOEOlC04udPWN4c.jpg" alt="picture" width="150" height="750"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://lh3.googleusercontent.com/proxy/P_Zxdbj1sJI-0qKwyNgYte_aT0rzypHsj1uVpLDbeB6E0uWFLfHaNIL54ABqTIlemGfkG4YMcmHW_UR-R2lLasqbLD_pqs8oAABhnEni" alt="picture" width="300" height="300"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://lh3.googleusercontent.com/proxy/P_Zxdbj1sJI-0qKwyNgYte_aT0rzypHsj1uVpLDbeB6E0uWFLfHaNIL54ABqTIlemGfkG4YMcmHW_UR-R2lLasqbLD_pqs8oAABhnEni" alt="picture" width="300" height="300"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            <div>
            
            <br></br> <button onClick={logout}>logout</button>
           
            </div>
            </div>
    )    

    
}

export default Home;