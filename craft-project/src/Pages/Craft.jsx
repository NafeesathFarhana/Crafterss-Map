import React, { useEffect, useState } from 'react'
import photo from '../Assets/picbig1.png'
import './Craft.css'
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
  import { MDBInput } from 'mdb-react-ui-kit';
  import { MDBTextArea } from 'mdb-react-ui-kit';
import axios from 'axios';
import { BASE_URL } from '../services/base_url';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
 
} from 'mdb-react-ui-kit';
import { Col,Row } from 'react-bootstrap';
import Nav from '../Components/Nav';
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer';



function Craft() {
  const {userId}=useParams()
  // console.log(userId);

// API call for get products
  const [allproducts,setallproducts]=useState([])
  const fetchData = async()=>{
    const response = await axios.get('http://localhost:8000/getproducts')
    // console.log(response.data.message);
    setallproducts(response.data.users) 
  }
  useEffect(()=>{
   fetchData()
  },[])
// console.log(allproducts);


//usestate for product input fields
const [productdetails,setproductdetails]=useState({
   name:'',
   description:'',
   supplies:'',
   productimage:''
  
})

//handleAdd for adding button

const handleAdd=async(e)=>{
  // const body={name,description,supplies,productimage}
  e.preventDefault()
  const{name,description,supplies,productimage}=productdetails
  if(!name||!description||!supplies||!productimage){
    alert('please fill the form')
  }
  else{
    const formData = new FormData()
    formData.append('name',name)
    formData.append('description',description)
    formData.append('supplies',supplies)
    formData.append('productimage',productimage)
    formData.append('userId',userId)


   await axios.post('http://localhost:8000/addcraft',formData).then((response)=>{

    console.log(response);
    alert('Your Work addedd successfully🎉')
    toggleOpen()
    
   
  
   })
  }
 console.log(name,description,supplies,productimage);

}


//delete products
const deleteProduct=async(_id)=>{
  const response = await axios.delete('http://localhost:8000/deleteproducts/'+_id)
  console.log(response);
 alert(response.data.message)
 fetchData() //deleting without refresh
}


const [staticModal, setStaticModal] = useState(false);
const toggleOpen = () => setStaticModal(!staticModal);
  
  return (
    <>
    <div>
      <Nav/>
<img src={photo} alt="" />
<h6 style={{marginRight:'1200px'}} > <a href={`/home/${userId}`} className='text-danger'>Home -- </a><b className='text-dark'>crafts</b></h6>
<h2 className=' fs-1 text-dark mt-3'style={{fontFamily:'serif' }} >Crafts</h2>
<p style={{textAlign:'justify'}} className='p-5 fs-5' >Welcome to our  <span className='text-danger'> crafters Map</span>! Dive into a world of endless creativity at our craft website. Discover a treasure trove of inspiration, project ideas, and quality crafting supplies. Whether you're a seasoned artisan or a beginner exploring your artistic side, we have something for everyone and you can add your product too. Transform ordinary moments into <span className='text-danger'>extraordinary memories with the joy of crafting</span>. Join our community of craft enthusiasts and let the artistic journey begin!</p>
<h3 style={{marginRight:'900px',fontFamily:'serif' }} className='fs-3' >Are you a creative maker at heart ?</h3>
<h4 style={{marginRight:'900px',fontFamily:'serif' }} className='fs-5 mt-3' >…Lets Make things Together and add your work here!

</h4>


   {/* /////////////modal and envelope///////////////////////////// */}
<div class="letter-image">
            <div class="animated-mail">
                <div class="back-fold"></div>
                <div class="letter">
                    <div class="letter-border"></div>
                    <div class="letter-title"></div>
                    <div class="letter-context"></div>
                    <div class="letter-context-body">
                        {/* <p><strong>Dear,<br />Ram Avtar</strong><br/> you are invited BPCON 2023</p> */}
                        <MDBBtn className='mt-4 p-2' onClick={toggleOpen}>Add Your Work</MDBBtn>

                    </div>
                    <div class="letter-stamp">
                        <div class="letter-stamp-inner"></div>
                    </div>
                </div>
                <div class="top-fold"></div>
                <div class="body"></div>
                <div class="left-fold"></div>
            </div>
            <div class="shadow"></div>
        </div>
    
      <MDBModal staticBackdrop tabIndex='-1' open={staticModal} setOpen={setStaticModal}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            <label>
          <input type="file" onChange={e=>setproductdetails({...productdetails,productimage:e.target.files[0]})}  />
          </label> 
         
     

           <MDBInput label='Name' id='typeText' type='text' className='mt-4' onChange={e=>setproductdetails({...productdetails,name:e.target.value})}  />
           <br />
           <MDBTextArea label='Description' id='textAreaExample' rows={4}  onChange={e=>setproductdetails({...productdetails,description:e.target.value})} />
           <br />
           <MDBInput label='Supplies' id='typeText' type='text' onChange={e=>setproductdetails({...productdetails,supplies:e.target.value})} />
           <br />

            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn className='p-2' color='secondary' onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn className='p-2' onClick={handleAdd} >Add</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
               
    </div>

   {/* ///////////////////add divs//////////////////////// */}
    <div className='p-5'> 

    <Row  style={{marginTop:'250px'  }}>
      {
        allproducts&&allproducts.map((item,index)=>(
         <Col md={3} >
        
        
         <MDBCard className=' m-3 p-3'  >
          <div id='card'>
           <div id='image'>
           {
            item&& item.productimage&&(
              <MDBCardImage src={`${BASE_URL}/uploads/${item.productimage}`} position='top' alt='...' height={200} />
            )
          }
           </div>
           {/*content div */}
           <div id='content'>
           <MDBCardBody>
            <MDBCardTitle ><h3 className='fs-5 mt-3' style={{fontFamily:'serif', textAlign:'justify'}}>Name:{item.name}</h3></MDBCardTitle>
          
   

  {/* ////////////#####################3buttons####################////////////////////////// */}
  <button className='btn me-2'  style={{marginTop:'50px',backgroundColor:'ThreeDFace'}} onClick={()=>deleteProduct(item._id)}><i class="fa-solid fa-trash  "></i></button> 

   <Link to={'/view/'+item._id}>
     <button className='btn  w-50' style={{ backgroundColor:'ThreeDFace'}}><i class="fa-solid fa-arrow-right"></i></button> 
      </Link> 



          </MDBCardBody>
       
           </div>
          </div>
          </MDBCard>
      
        
        
         </Col>
        ))
      }
    </Row>

    </div>
    <Footer/>
 
    </>
  )
}

export default Craft