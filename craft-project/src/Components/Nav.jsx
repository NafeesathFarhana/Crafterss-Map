import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
  } from 'mdb-react-ui-kit';
 import photo from '../Assets/logo.png'
import { useParams } from 'react-router-dom';

function Nav() {
  const { userId }=useParams()
  return (
    <div>
         <MDBNavbar light style={{backgroundColor:'thistle',height:"100px"}}   >
        <MDBContainer  >
          <MDBNavbarBrand href='#' >
           
            <a href={`/home/${userId}`}>  <h4 style={{fontfamily: 'Great Vibes, cursive', color:'black',fontFamily:'Dancing Script, cursive', fontSize:'30px'}}>Crafters Map</h4></a>
             <nav aria-label='breadcrumb' style={{marginLeft:'730px'}} >
          <MDBBreadcrumb  >
            <MDBBreadcrumbItem  >
             <a href={`/home/${userId}`}><b style={{fontFamily:'revert'}} >Home</b></a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem >
              <a href={`/craft/${userId}`}><b style={{fontFamily:'revert'}}>Craft</b></a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active aria-current='page'>
              <a href={`/knit/${userId}`}><b style={{fontFamily:'revert'}}>Knitting</b></a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active aria-current='page'>
              <a href={`/supplies/${userId}`}><b style={{fontFamily:'revert'}}>Supplies</b></a>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
            <a href={`/myworks/${userId}`}><b style={{fontFamily:'revert'}}>Myworks</b></a>
            </MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </nav>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
 
    </div>
  )
}

export default Nav