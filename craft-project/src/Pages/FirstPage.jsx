import React, { useEffect, useState } from 'react'
import './FirstPage.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Nav from '../Components/Nav'

function FirstPage() {
  
 const location = useNavigate() 
//  const locationn = useNavigate()

//usesatate for register
const[name,setName] = useState('')
const[email,setEmail] = useState('')
const[passwrd,setPasswrd] = useState('')

//usestate for login
const[logEmail,setlogEmail] = useState('')
const[logPasswrd,setlogPasswrd] = useState('')

//state for login
const[alluser,setAlluser] = useState([])
// const [dataLoaded, setDataLoaded] = useState(false);

console.log(logEmail,logPasswrd);

const fetchData = async()=>{
  const response = await axios.get('http://localhost:8000/getUsers')
  // console.log(response.data.message);
setAlluser(response.data.users) 
}
useEffect(()=>{
 fetchData()
},[])

console.log(alluser);
//button function of register
const founduser = alluser.find((item)=>item.email === logEmail &&item.passwrd === logPasswrd)

    const handleSignIn = async (e) => {
      e.preventDefault();
  
     if(founduser){
      alert('Login Successfull')
      location(`/home/${founduser._id}`)
     }
     else{
      alert('Invalid Email or Password');
     }
   };


const handleAdd=async(e)=>{
 const body = {name,email,passwrd} 
 if(name === '' || email === '' || passwrd === ''){
   alert("please fill the form")
 }
 else{
 //api call to add user details
 await axios.post('http://localhost:8000/addUsers',body) .then((response)=>{
console.log(response);
alert(response.data.message)
// locationn('/login/reg#')



}).catch((error)=>{
  alert("Enter unique id")
})
 }

}

console.log(name,email,passwrd);

  return (   
  <div>
 <Nav/>
 
<div id="container" >

{/* <!-- Cover Box --> */}
<div id="cover">

{/* <!-- Sign Up Section --> */}
<h1 class="sign-up">Hello, Friend!</h1>
<p class="sign-up">Enter your personal details <br /> and start a journey with us</p>
<a class="button sign-up" href="#cover">Sign Up</a>

{/* <!-- Sign In Section --> */}
<h1 class="sign-in">Welcome Back!</h1>
<p class="sign-in">To keep connected with us please <br /> login with your personal info</p>
<br />
<a class="button sub sign-in" href="#">Sign In</a>
</div>

{/* <!-- Login Box --> */}
<div id="login">
<h1>Sign In</h1>
<input onChange={(e)=>setlogEmail(e.target.value)}  type="Email" placeholder='Email' autocomplete="off" /><br />
<input onChange={(e)=>setlogPasswrd(e.target.value)} type="password" placeholder='PassWord' autocomplete="off" /><br />
<a id="forgot-pass" href="#cover">New to here? Please Register Here</a><br />
{/* <input class="submit-btn" type="submit" value="sign In"/> */}
<button  onClick={(e)=>handleSignIn(e)}  class="submit-btn" type="submit">sign In</button>
</div>

{/* <!-- Register Box --> */}
<div id="register">
<h1>Create Account</h1>
<input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name' autocomplete="off" /><br />
<input onChange={(e)=>setEmail(e.target.value)} type="Email" placeholder='Email' autocomplete="off" /><br />
<input onChange={(e)=>setPasswrd(e.target.value)} type="password" placeholder='Password' autocomplete="off" /><br />
{/* <input type="submit"  class="submit-btn" value="Sign Up" /> */}
<button onClick={(e)=>handleAdd(e)} type="submit"  class="submit-btn" >Sign Up</button>
</div>
</div> 
</div>  
  )
}

export default FirstPage