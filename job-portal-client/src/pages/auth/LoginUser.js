import React, {useState} from 'react'; 
import {useNavigate} from 'react-router-dom';
import {  toast } from 'react-toastify';
import axios from 'axios' 
import { useAuth } from '../../components/context/auth';

const LoginUser = () => {
  const navigate = useNavigate(); 

  const baseUrl = 'http://localhost:8080/api/v1/auth';

  const [email,
    setEmail] = useState('');
const [password,
    setPassword] = useState('');

    const [auth,setAuth] = useAuth();

     // Form function
     const handleSubmit = async(e) => {
      e.preventDefault();

      try{ 
          const res = await axios.post(`${baseUrl}/login-user`,
          {password,email});
          if(res && res.data.success){  
              toast(res.data.message); 
              if(res.status ===201) { 



                setAuth({
                ...auth,
                user: res?.data?.data[0],
                token: res?.data?.token,
                isUserLogin:true
            });
            localStorage.setItem('auth', JSON.stringify(res.data));

              navigate('/')
              }  ;
              
          }
         
      }catch(error) {
          toast("Something went wrong"); 
      }

  };


  return (<>
    <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h1 className="title">Login</h1>

                    <div className="mb-3">
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="InputEmail"
                            required
                            placeholder="Enter your email"/>
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="InputPassword"
                            placeholder="Enter your password"
                            required/>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </form>
            </div>
  </>
  )
}

export default LoginUser