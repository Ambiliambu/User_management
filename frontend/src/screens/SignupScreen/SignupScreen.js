import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import ErrorMessage from '../../components/ErrorMessage';
import "./SignupScreen.css";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'

function SignupScreen() {

  const navigate = useNavigate()

  // const [name,setName]=useState("") 
  // const [email,setEmail]=useState("")
  // const [password,setPassword]=useState("")

  const [error, setError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }, } = useForm();



  const onSubmit =  (data) => {
  // console.log("uj",data);

  // console.log("hj",{errors});
      
    const config = {
      header: {
        "Content-type": "application/json"
      }
    };

   
    axios.post('/api/users', data, config)

      .then((response) => {
        // console.log("hlk",response.data);


        localStorage.setItem('userInfo', JSON.stringify(response.data))

        navigate('/frontpage')
        console.log("dfgh");


      }).catch((error) => {
        console.log(error);
        setError(error.response.data.message);


      })


  }
  console.log("uj",errors);


  return (
    <div>

      <div>
        <Container>
          <Row>
            <div className="signup">
              <div className="form">

                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}

           
                <form className="signup-form" onSubmit={handleSubmit(onSubmit)} method="post">
                  <span className="material-icons">Signup</span>

                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    {...register('name', { required: {value:true,message:"Name is required"},
                                          minLength:{value:3,message:"Enter the valid name"},
                                          pattern:{value:/^[a-zA-Z '.-]*$/ ,message:"Enter valid name"}
                                        
                                        })}
                  />
                    <p  style={{ color: "crimson" }}>{errors.name?.message}</p>

                  <input

                    type="email"
                    placeholder="Email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
                    // value={email}
                    // onChange={(e)=>setEmail(e.target.value)}
                    name='email'
                    {...register('email', { required: {value:true,message:"Email is required" }},
                        {pattern:{value:/^\w+@(\w)+((\-)\w+)?(\.(\w+)){1,2}$/,message:"Enter valid Email"}})}
   
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
                  
                  <button type="submit">Signup</button>
                </form>
                <a style={{ color: "lightcoral" }} href="/login">Click here to login</a>
              </div>
            </div>
          </Row>
        </Container>

      </div>
    </div>
  )
}

export default SignupScreen;
