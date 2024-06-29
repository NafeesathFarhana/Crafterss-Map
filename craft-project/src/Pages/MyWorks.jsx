import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../Components/Nav';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import { BASE_URL } from '../services/base_url';
import Footer from '../Components/Footer';



function MyWorks() {
    const {userId}=useParams()
    console.log(userId);

// API call for get crafts
const [craftwork,setallcraftwork]=useState([])
const fetchData = async()=>{
  const response = await axios.get('http://localhost:8000/getproducts')
  const arr=response.data.users    
        setallcraftwork(arr)
  console.log(craftwork); 

}
useEffect(()=>{
 fetchData()
},[])


// API call for get knits
const [knitwork,setallknitwork]=useState([])
const fetchDataa = async()=>{
  const response = await axios.get('http://localhost:8000/getknit')
  setallknitwork(response.data.users) 
 
}
useEffect(()=>{
 fetchDataa()
},[])









  return (
    <div>
       <Nav/>

       <div style={{marginTop:'40px'}} className='d-flex ' >
       {craftwork.length > 0
  ? craftwork
      .filter((item) => item.userId === userId)
      .map((item) => (
        <div key={item.id} className='me-5'>
          <img
            src={`${BASE_URL}/uploads/${item.productimage}`}
            height={'250px'}
            width={'250px'}
            alt=""
          />
          <h2 style={{ fontFamily: 'initial' }}>{item.name}</h2>
        </div>
      ))
  : null}
 {/* //////////////////#############knitwork////////////////########################33 */}
 
{knitwork.length > 0
  ? knitwork
      .filter((item) => item.userId === userId)
      .map((item) => (
        <div key={item.id}>
          <img
            src={`${BASE_URL}/uploads/${item.productimage1}`}
            height={'250px'}
            width={'250px'}
            alt=""
          />
          <h2 style={{ fontFamily: 'initial' }}>{item.name1}</h2>
        </div>
      ))
  : null}
  </div>

 
 



<Footer/>
    </div>
  )
}

export default MyWorks