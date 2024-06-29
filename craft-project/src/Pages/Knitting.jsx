// import React from 'react'
// import photo from '../Assets/picbig1.png'
// import './Knitting.css'
// import Nav from '../Components/Nav'
// import {
//     MDBBtn,
//     MDBModal,
//     MDBModalDialog,
//     MDBModalContent,
//     MDBModalHeader,
//     MDBModalTitle,
//     MDBModalBody,
//     MDBModalFooter,
//     MDBCol,
//     MDBRow,
//   } from 'mdb-react-ui-kit';
//     import { MDBInput } from 'mdb-react-ui-kit';
//     import { MDBTextArea } from 'mdb-react-ui-kit';
//   import axios from 'axios';
//   import { BASE_URL } from '../services/base_url';
//   import {
//     MDBCard,
//     MDBCardBody,
//     MDBCardTitle,
//     MDBCardText,
//     MDBCardImage,
   
//   } from 'mdb-react-ui-kit';
//   import { Col,Row } from 'react-bootstrap';
//   import Nav from '../Components/Nav';
//   import { Link } from 'react-router-dom';




// function Knitting() {
//     // API call for get products
//   const [allproducts,setallproducts]=useState([])
//   const fetchData = async()=>{
//     const response = await axios.get('http://localhost:8000/getproducts')
//     // console.log(response.data.message);
//     setallproducts(response.data.users) 
//   }
//   useEffect(()=>{
//    fetchData()
//   },[])
// // console.log(allproducts);


// //usestate for product input fields
// const [productdetails,setproductdetails]=useState({
//    name:'',
//    description:'',
//    supplies:'',
//    productimage:''
  
// })

// //handleAdd for adding button

// const handleAdd=async(e)=>{
//   // const body={name,description,supplies,productimage}
//   e.preventDefault()
//   const{name,description,supplies,productimage}=productdetails
//   if(!name||!description||!supplies||!productimage){
//     alert('please fill the form')
//   }
//   else{
//     const formData = new FormData()
//     formData.append('name',name)
//     formData.append('description',description)
//     formData.append('supplies',supplies)
//     formData.append('productimage',productimage)
//    await axios.post('http://localhost:8000/addcraft',formData).then((response)=>{

//     console.log(response);
//     alert('Your Work addedd successfully🎉')
//     toggleOpen()
    
   
  
//    })
//   }
//  console.log(name,description,supplies,productimage);

// }


// //delete products
// const deleteProduct=async(_id)=>{
//   const response = await axios.delete('http://localhost:8000/deleteproducts/'+_id)
//   console.log(response);
//  alert(response.data.message)
//  fetchData() //deleting without refresh
// }


// const [staticModal, setStaticModal] = useState(false);
// const toggleOpen = () => setStaticModal(!staticModal);
  
//   return (
//     <div>
//         <Nav/>
// <img src={photo} alt="" />
// <h6 style={{marginRight:'1200px'}} > <a href="/home/:userId" className='text-danger'>Home -- </a><b className='text-dark'>Knitting</b></h6>
// <h2  className=' fs-1 text-dark mt-3'style={{fontFamily:'serif' }} >Knitting</h2>
// <p  style={{textAlign:'justify'}} className='p-5 fs-5'>Welcome to <span className='text-danger'> Crafters Map knitting sanctuary</span>, where the art of crafting meets the warmth of handmade creations. Dive into a world of <span className='text-danger'> yarn and needles</span>, where every stitch tells a story. It is a haven for enthusiasts of all levels, offering a curated selection of <span className='text-danger'> premium yarns, patterns, and accessories</span>. Whether you're a seasoned knitter or a beginner eager to learn, we provide the tools and inspiration to turn strands of yarn into beautiful, tangible expressions of your creativity. Explore our patterns, share your projects with our community, and let the soft click of needles become the <span className='text-danger'>soundtrack to your crafting journey</span>. Join us in celebrating the joy of knitting and the endless possibilities it holds!</p>


// {/* /////////////modal and envelope///////////////////////////// */}
// <div class="letter-image">
//             <div class="animated-mail">
//                 <div class="back-fold"></div>
//                 <div class="letter">
//                     <div class="letter-border"></div>
//                     <div class="letter-title"></div>
//                     <div class="letter-context"></div>
//                     <div class="letter-context-body">
//                         {/* <p><strong>Dear,<br />Ram Avtar</strong><br/> you are invited BPCON 2023</p> */}
//                         <MDBBtn className='mt-4 p-2' onClick={toggleOpen}>Add Your Work</MDBBtn>
//                    </div>
//                     <div class="letter-stamp">
//                         <div class="letter-stamp-inner"></div>
//                     </div>
//                 </div>
//                 <div class="top-fold"></div>
//                 <div class="body"></div>
//                 <div class="left-fold"></div>
//             </div>
//             <div class="shadow"></div>
//         </div>
//         <MDBModal staticBackdrop tabIndex='-1' open={staticModal} setOpen={setStaticModal}>
//         <MDBModalDialog>
//           <MDBModalContent>
//             <MDBModalHeader>
//               <MDBModalTitle>Modal title</MDBModalTitle>
//               <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
//             </MDBModalHeader>
//             <MDBModalBody>
//             <label>
//           <input type="file" onChange={e=>setproductdetails({...productdetails,productimage:e.target.files[0]})}  />
//           </label> 
         
     

//            <MDBInput label='Name' id='typeText' type='text' className='mt-4' onChange={e=>setproductdetails({...productdetails,name:e.target.value})}  />
//            <br />
//            <MDBTextArea label='Description' id='textAreaExample' rows={4}  onChange={e=>setproductdetails({...productdetails,description:e.target.value})} />
//            <br />
//            <MDBInput label='Supplies' id='typeText' type='text' onChange={e=>setproductdetails({...productdetails,supplies:e.target.value})} />
//            <br />

//             </MDBModalBody>
//             <MDBModalFooter>
//               <MDBBtn className='p-2' color='secondary' onClick={toggleOpen}>
//                 Close
//               </MDBBtn>
//               <MDBBtn className='p-2' onClick={handleAdd} >Add</MDBBtn>
//             </MDBModalFooter>
//           </MDBModalContent>
//         </MDBModalDialog>
//       </MDBModal>

//     </div>
    
//   )
// }

// export default Knitting







import React, { useEffect, useState } from 'react'
import photo from '../Assets/picbig1.png'
import './Knitting.css'
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





function Knitting() {
  const {userId}=useParams()
  console.log(userId);

// API call for get products
  const [allknitproducts,setallknitproducts]=useState([])
  const fetchDataa = async()=>{
    const response = await axios.get('http://localhost:8000/getknit')
    // console.log(response.data.message);
    setallknitproducts(response.data.users) 
  }
  useEffect(()=>{
   fetchDataa()
  },[])
// console.log(allknitproducts);


//usestate for product input fields
const [knitproductdetails,setknitproductdetails]=useState({
   name1:'',
   description1:'',
   supplies1:'',
   productimage1:''
  
})

//handleAdd for adding button

const handleAdding=async(e)=>{
  // const body={name,description,supplies,productimage}
  e.preventDefault()
  const{name1,description1,supplies1,productimage1}=knitproductdetails
  if(!name1||!description1||!supplies1||!productimage1){
    alert('please fill the form')
  }
  else{
    const formData = new FormData()
    formData.append('name1',name1)
    formData.append('description1',description1)
    formData.append('supplies1',supplies1)
    formData.append('productimage1',productimage1)
    formData.append('userId',userId)
   await axios.post('http://localhost:8000/addknit',formData).then((response)=>{

    console.log(response);
    alert('Your knit addedd successfully🎉')
    toggleOpen()
    
   
  
   })
  }
 console.log(name1,description1,supplies1,productimage1);

}


// delete products
const deleteknits=async(_id)=>{
  const response = await axios.delete('http://localhost:8000/deleteknit/'+_id)
  console.log(response);
 alert(response.data.message)
 fetchDataa() //deleting without refresh
}


const [staticModal, setStaticModal] = useState(false);
const toggleOpen = () => setStaticModal(!staticModal);
  
  return (
    <>
    <div>
      <Nav/>
<img src={photo} alt="" />
<h6 style={{marginRight:'1200px'}} > <a href={`/home/${userId}`} className='text-danger'>Home -- </a><b className='text-dark'>Knitting</b></h6>
<h2  className=' fs-1 text-dark mt-3'style={{fontFamily:'serif' }} >Knitting</h2>
<p  style={{textAlign:'justify'}} className='p-5 fs-5'>Welcome to <span className='text-danger'> Crafters Map knitting sanctuary</span>, where the art of crafting meets the warmth of handmade creations. Dive into a world of <span className='text-danger'> yarn and needles</span>, where every stitch tells a story. It is a haven for enthusiasts of all levels, offering a curated selection of <span className='text-danger'> premium yarns, patterns, and accessories</span>. Whether you're a seasoned knitter or a beginner eager to learn, we provide the tools and inspiration to turn strands of yarn into beautiful, tangible expressions of your creativity. Explore our patterns, share your projects with our community, and let the soft click of needles become the <span className='text-danger'>soundtrack to your crafting journey</span>. Join us in celebrating the joy of knitting and the endless possibilities it holds!</p>




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
          <input type="file" onChange={e=>setknitproductdetails({...knitproductdetails,productimage1:e.target.files[0]})}  />
          </label> 
         
     

           <MDBInput label='Name' id='typeText' type='text' className='mt-4' onChange={e=>setknitproductdetails({...knitproductdetails,name1:e.target.value})}  />
           <br />
           <MDBTextArea label='Description' id='textAreaExample' rows={4}  onChange={e=>setknitproductdetails({...knitproductdetails,description1:e.target.value})} />
           <br />
           <MDBInput label='Supplies' id='typeText' type='text' onChange={e=>setknitproductdetails({...knitproductdetails,supplies1:e.target.value})} />
           <br />

            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn className='p-2' color='secondary' onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn className='p-2' onClick={handleAdding} >Add</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
               
    </div>
 {/* ///////////////////add divs//////////////////////// */}
 <div className='p-5'> 

<Row  style={{marginTop:'250px'  }}>
  {
    allknitproducts&&allknitproducts.map((item,index)=>(
     <Col md={3} >
    
    
     <MDBCard className=' m-3 p-3'  >
      <div id='card'>
       <div id='image'>
       {
        item&& item.productimage1&&(
          <MDBCardImage src={`${BASE_URL}/uploads/${item.productimage1}`} position='top' alt='...' height={200} />
        )
      }
       </div>
       {/*content div */}
       <div id='content'>
       <MDBCardBody>
        <MDBCardTitle><h3 className='fs-5' style={{fontFamily:'serif', textAlign:'justify'}}>Name:{item.name1}</h3></MDBCardTitle>
        {/* <MDBCardText>
          <h2>Instrut:{item.description}</h2>
          <h3>Supplies:{item.supplies}</h3>
        </MDBCardText> */}


{/* ////////////#####################3buttons####################////////////////////////// */}
<button className='btn me-2'  style={{marginTop:'50px',backgroundColor:'ThreeDFace'}}  onClick={()=>deleteknits(item._id)}> <i class="fa-solid fa-trash  "></i></button> 

<Link to={'/knitview/'+item._id}>
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

export default Knitting