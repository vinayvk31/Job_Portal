import React, {useState} from 'react'; 
import {useNavigate} from 'react-router-dom';
import {  toast } from 'react-toastify';
import axios from 'axios'  
import { useCompanyAuth } from '../../components/context/companyauth';

const LoginCOmpany = () => {
    const navigate = useNavigate(); 

  const baseUrl = 'http://localhost:8080/api/v1/auth';

  const [email,
    setEmail] = useState('');
const [password,
    setPassword] = useState('');
    const [role,
        setRole] = useState('');

    const [companyAuth,setCompanyAuth] = useCompanyAuth();

     // Form function
     const handleSubmit = async(e) => {
      e.preventDefault();

      try{
          // const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, {email, password});
          // if (res && res.data.success) {
          //     toast(res.data.message);

              // setAuth({
              //     ...auth,
              //     user: res?.data?.user,
              //     token: res?.data?.token
              // });
          //     // localStorage.setItem('auth', JSON.stringify(res.data));
          //     // console.log(auth); // look after later
          //     navigate('/')
          const res = await axios.post(`${baseUrl}/login-company`,
          {password,role,email});
          if(res && res.data.success){  
              toast(res.data.message); 
              if(res.status ===201) { 



                setCompanyAuth({
                ...companyAuth,
                company: res?.data?.data[0],
                token: res?.data?.token,
                isCompanyLogin:true
            });
            localStorage.setItem('companyAuth', JSON.stringify(res.data));

              navigate('/')
              }  ;
              
          }
         
      }catch(error) {
          toast("Something went wrong");
          console.log(error);
      }

  };


  return (
    <>
    <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h1 className="title">Company Login</h1>

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
                            type="text"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="form-control"
                            id="InputEmail"
                            required
                            placeholder="Enter your Role"/>
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

export default LoginCOmpany