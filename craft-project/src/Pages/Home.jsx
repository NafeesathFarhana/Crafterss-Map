import React, { useEffect, useState } from 'react'
import { MDBCarousel, MDBCarouselItem , MDBCarouselCaption} from 'mdb-react-ui-kit';
import banner from '../Assets/cerosal 1.png'
import banner2 from '../Assets/cerosal 2.png'
import banner3 from '../Assets/cerosal 3.png'
import { Link, useParams } from 'react-router-dom';
import Nav from '../Components/Nav';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import { BASE_URL } from '../services/base_url';
import beginer from '../Assets/Light Brown Feminine Floral Border Business Card.png'
import './Home.css'
import Footer from '../Components/Footer';



function Home() {
  const {userId}=useParams()
  console.log(userId);

// API call for get products
const [homeproducts,setallhomeproducts]=useState([])
const fetchData = async()=>{
  const response = await axios.get('http://localhost:8000/getproducts')
  // console.log(response.data.message);
  setallhomeproducts(response.data.users) 
}
useEffect(()=>{
 fetchData()
},[])
console.log(homeproducts);

// API call for get products
  const [homeknits,setallhomeknits]=useState([])
  const fetchDataa = async()=>{
    const response = await axios.get('http://localhost:8000/getknit')
    // console.log(response.data.message);
    setallhomeknits(response.data.users) 
  }
  useEffect(()=>{
   fetchDataa()
  },[])
// console.log(allknitproducts);



  
  //carousal
  return (
    <>
    <Nav/>
       <MDBCarousel showControls >
      <MDBCarouselItem itemId={1} className='mt-2' >
        <img src={banner3} className='d-block w-100' alt='...'  style={{height:'350px'}} />

      </MDBCarouselItem>
      <MDBCarouselCaption>
      {/* <button className='btn btn-brown mb-5' style={{marginRight:'800px'}} >Get Started</button> */}
      </MDBCarouselCaption>
      <MDBCarouselItem itemId={2} className='mt-2' >
        <img src={banner2} className='d-block w-100' alt='...'  style={{height:'350px'}} />
      </MDBCarouselItem>
      <MDBCarouselCaption>
        {/* <button className='btn btn-dark mb-4' style={{marginRight:'800px'}} >Get Started</button> */}
       
      </MDBCarouselCaption>
      <MDBCarouselItem itemId={3} className='mt-2' >
      <img src={banner} className='d-block w-100' alt='...'   style={{height:'350px'}} />

      </MDBCarouselItem>
      <MDBCarouselCaption>

      </MDBCarouselCaption>
    </MDBCarousel>


    <h2 style={{marginTop:'70px', fontFamily:'serif', textShadow:'2px 1px grey' }} className='text-dark fs-1' >Latest <span className='text-danger' style={{fontFamily:'serif'}}>CraftTreat</span></h2>
    <marquee behavior="" direction="" scrollAmount={45}  >
  <Row style={{marginTop:'40px'}} >
    {homeproducts.length > 0
      ? homeproducts.slice(0, 5).map((item) => (
          <Col key={item.id}>
            <img src={`${BASE_URL}/uploads/${item.productimage}`} height={'250px'} width={'250px'} alt="" />
            <h2 style={{fontFamily:'initial'}}   >{item.name}</h2>
          </Col>
        ))
      : null}
  </Row>
</marquee>



{/* /////////////###############knit View###########################////////////////////// */}
<h2 style={{fontFamily:'serif' , textShadow:'2px 1px grey'}} className='text-dark fs-1 mt-5'>Explore <span className='text-danger' style={{fontFamily:'serif'}}>KnitIt</span> </h2>
<marquee behavior="" direction="" scrollAmount={45}  >
  <Row style={{marginTop:'40px'}} >
    {homeknits.length > 0
      ? homeknits.slice(0, 5).map((item) => (
          <Col key={item.id}>
            <img src={`${BASE_URL}/uploads/${item.productimage1}`} height={'250px'} width={'250px'} alt="" />
            <h2 style={{fontFamily:'initial'}}   >{item.name1}</h2>
          </Col>
        ))
      : null}
  </Row>
</marquee>

{/* /////////////////banner cerosal/////////////////// */}
<div id="beginer">
<div className='text'>
  <h2 style={{fontFamily:'serif'}} className='text-dark p-5'>Explore Our BeginersKit</h2>
  <h3 style={{textAlign:'justify'}} className='text-center'>
Beginner's kits in crafts serve as comprehensive packages designed to provide individuals who are new to a particular craft with the essential tools and materials needed to start exploring and creating.</h3>
<Link to={`/supplies/${userId}`}>
<button  className='btn btn-dark mt-3'>Discover More</button>
</Link>
  </div>

</div>
<Footer/>


    </>
  )
}

export default Home