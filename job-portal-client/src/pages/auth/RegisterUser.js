import React, {useState} from 'react'  
import { ToastContainer, toast } from 'react-toastify';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterUser = () => {
    const navigate = useNavigate();

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("") 
    const [username,setUsername] = useState("")
    

    const baseUrl = 'http://localhost:8080/api/v1/auth';
    //form function
    const handeleSubmit =async (e) =>{
        e.preventDefault();
      try{
        const res = await axios.post(`${baseUrl}/register-user`,
        {name,email,password,username});
        if(res && res.data.success){  
            toast(res.data.message); 
            res.status ===201 ? (navigate('/login-user')) :(toast("try with another credentails"))  ;
            
        }else{ 
        }
    
      }catch(error){ 
        console.log(error);
      }
    }
  return (<><div className='form-container'>
                
  <form onSubmit={handeleSubmit}>
  <h1 className='title'>Register Form</h1>
  <div className="mb-3"> 
          <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control"
              id="InputAddress"
              placeholder='username'
              required />
      </div>
      <div className="mb-3"> 
          <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="InputName"
              placeholder='Name'
              value={name}
              required
              />
      </div>
      <div className="mb-3"> 
          <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="InputEmail"
              required
              placeholder='email'/>
      </div>
      <div className="mb-3"> 
          <input type="password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           className="form-control"
            id="InputPassword"
          placeholder='password'
          required
            />
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
  </form>
</div>
<ToastContainer />
</>  
  )
}

export default RegisterUser