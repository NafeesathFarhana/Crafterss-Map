import React from 'react'
// import image from '../Assets/mainpage.jpg'
import { Link } from 'react-router-dom'
import './Main.css'
import { MDBCarousel, MDBCarouselItem,MDBCarouselCaption } from 'mdb-react-ui-kit';
import main from '../Assets/Brown and Black Geometric Business Banner (Landscape).png'



function Main() {
  return (

  <div  >
      <MDBCarousel>
      <MDBCarouselItem itemId={1} >
        <img src={main} alt="" height={'750px'}width={'100%'} />
       
      </MDBCarouselItem>
      <MDBCarouselCaption>
    <a href='/login/reg'><button className='btnnnn p-3 text-dark ' style={{marginBottom:'150px'}}>Get Started</button>
</a>  
     </MDBCarouselCaption>
      </MDBCarousel>
     
    </div>


  
  )
}

export default Main