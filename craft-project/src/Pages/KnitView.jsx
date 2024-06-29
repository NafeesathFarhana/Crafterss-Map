import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../services/base_url';
import Nav from '../Components/Nav';
import { Col, Row } from 'react-bootstrap';
import './KnitView.css'



function KnitView() {

    const {userId}=useParams()
    console.log(userId);
   
  //state creation
  const[knittingData,setknitData]=useState([])
  //api fetch for particular product details
  const viewknits=async(_id)=>{
    const response = await axios.get(`http://localhost:8000/getknit/${userId}`)
    console.log(response.data.knit);
    setknitData(response.data.knit)
  }
  console.log(knittingData);
  useEffect(()=>{
    viewknits()
  },[])
  return (
    <div>
         <div className='boo'>
  <Nav/>
<Row>
  <Col className='shrink  ' style={{marginLeft:'40px', marginTop:'250px'}} > 
  <img className='border border-2 '   src={`${BASE_URL}/uploads/${knittingData.productimage1}`} height={'400px'} width={'400px'} alt=""  />

   </Col>
  <Col style={{marginTop:'150px', marginRight:'80px'}}>
 <h1 style={{fontFamily: 'Sacramento, cursive'}} >{knittingData.name1} </h1>
  <h5 style={{fontFamily:'serif', textAlign:'justify'}}> <span className='text-danger'><b>Description:</b></span>  {knittingData.description1}</h5>
  <h5 style={{fontFamily:'serif' , textAlign:'justify'}}> <span className='text-danger'><b>Supplies:</b></span> {knittingData.supplies1}</h5>
  </Col>
</Row> 


    </div>
    </div>
  )
}

export default KnitView