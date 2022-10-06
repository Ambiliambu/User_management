import React, { useState } from 'react'
import  {useNavigate} from "react-router-dom";
import { Container, Row } from 'react-bootstrap'
import "./LoginScreen.css";
import axios from 'axios'
// import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import { useForm } from 'react-hook-form'


function LoginScreen() {

const navigate=useNavigate()

//  const [email,setEmail]=useState("")
//  const [password,setPassword]=useState("")

 const [error,setError]=useState(false)
 console.log("ll")

 const {
  register,
  handleSubmit,
  formState: { errors }, } = useForm();

 const  onSubmit=async(data)=>{
   console.log("email,password")
    

   
      const config={
        header:{
          "Content-type":"application/json"
        }
      }

       axios.post('/api/users/login',data, config )
    .then((response)=>{
      console.log("ghj",response);
      localStorage.setItem('userInfo',JSON.stringify(response.data))
     console.log("ghjk");
      if (localStorage.userInfo) {
        navigate('/frontpage');
        console.log("cvbn");
        }
        console.log("ghjkl");
    })
  
  .catch((error)=>{
          console.log(error);
        setError(error.response.data.message);

  })
 
 


 }

  return (
    <div>
      
    <div>
      
    <Container>
        <Row>
        <div className="login">
  <div className="form">
    {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
    
    <form className="login-form" onSubmit={handleSubmit(onSubmit)} method="post">
      <span className="material-icons">Login</span>
      <input 
      type="email" 
      placeholder="Email" 
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
      name='email'
      {...register('email', { required: {value:true,message:"Email is required" }},
          {pattern:{value:/^\w+@(\w)+((\-)\w+)?(\.(\w+)){1,2}$/,message:"Enter valid Email"}}  )}
      />

      <p  style={{ color: "crimson" }}>{errors.email?.message}</p>

      <input      
      type="password" 
      placeholder="Password" 
      name='password'
      {...register('password', { required: {value:true,message:"Password is required"},
                              minLength:{value:3,message:"Password must be at least 3 character"},
                              maxLength:{value:6,message:"Password cannot exceed more than 6 character"},
                              })}
     />
       <p  style={{ color: "crimson" }}>{errors.password?.message}</p>

      <button type="submit">login</button>
    </form> 
  <a style={{color:"lightcoral"}} href="/signup">Click here to Signup</a>

  </div>
</div>
        </Row>
    </Container>

    </div>
    </div>

  )
}

export default LoginScreen
