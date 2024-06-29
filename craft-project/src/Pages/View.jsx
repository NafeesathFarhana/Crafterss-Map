import React, { useEffect, useState } from 'react'
import Nav from '../Components/Nav'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Col, Row } from 'react-bootstrap';
import { BASE_URL } from '../services/base_url';
import './View.css'



function View() {
  const {userId}=useParams()
  console.log(userId);
 
//state creation
const[productData,setproductData]=useState([])
//api fetch for particular product details
const viewPrdct=async(_id)=>{
  const response = await axios.get(`http://localhost:8000/getproducts/${userId}`)
  console.log(response.data.Product);
  setproductData(response.data.Product)
}
console.log(productData);
useEffect(()=>{
  viewPrdct()
},[])


  return (
    <div className='boo'>
  <Nav/>
<Row>
  <Col className='shrink ' style={{marginLeft:'40px', marginTop:'230px'}} > 
  <img src={`${BASE_URL}/uploads/${productData.productimage}`} height={'400px'} width={'400px'} alt=""  />

   </Col>
  <Col style={{marginTop:'100px', marginRight:'80px'}}>
 <h1 style={{fontFamily: 'Sacramento, cursive'}} >Name:{productData.name}</h1>
  <h5 style={{fontFamily:'serif', textAlign:'justify'}}> <span className='text-danger'><b>Description:</b></span> {productData.description}</h5>
  <h5 style={{fontFamily:'serif', textAlign:'justify'}}> <span className='text-danger'><b>Supplies:</b></span> {productData.supplies}</h5>
  </Col>
</Row> 


    </div>
  )
}

export default View