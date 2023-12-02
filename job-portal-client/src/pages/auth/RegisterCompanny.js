import React, {useState} from 'react'  
import { ToastContainer, toast } from 'react-toastify';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterCompanny = () => {

    const navigate = useNavigate();

    const [name,setName] = useState("")
    const [website,setWebsite] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("") 
    const [role,setRole] = useState("")
    

    const baseUrl = 'http://localhost:8080/api/v1/auth';
    //form function
    const handeleSubmit =async (e) =>{
        e.preventDefault();
      try{
        const res = await axios.post(`${baseUrl}/register-company`,
        {name,email,password,role,website});
        if(res && res.data.success){  
            toast(res.data.message); 
            res.status ===201 ? (navigate('/login-user')) :(toast("try with another credentails"))  ;
            
        }else{ 
        }
    
      }catch(error){ 
        console.log(error);
      }
    }
  return (
    <><div className='form-container'>
                
    <form onSubmit={handeleSubmit}>
    <h1 className='title'>Company register</h1>
    <div className="mb-3"> 
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                id="InputAddress"
                placeholder='company name'
                required />
        </div>
        <div className="mb-3"> 
            <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="form-control"
                id="InputAddress"
                placeholder='company website'
                required />
        </div>
        <div className="mb-3"> 
            <input
                type="text"
                onChange={(e) => setRole(e.target.value)}
                className="form-control"
                id="InputName"
                placeholder='role'
                value={role}
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

export default RegisterCompanny