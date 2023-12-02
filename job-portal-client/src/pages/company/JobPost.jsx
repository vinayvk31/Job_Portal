import React, {useState} from 'react'  
import { ToastContainer, toast } from 'react-toastify';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCompanyAuth } from '../../components/context/companyauth';

const JobPost = () => {
    const navigate = useNavigate();
    const [companyAuth, setCompanyAuth]= useCompanyAuth();
    console.log(companyAuth);

    const cid = companyAuth.company?.id;

    const [Title,setTitle] = useState("")
    const [Description,setDescription] = useState("")
    const [Location,setLocation] = useState("")
    const [Salary,setSalary] = useState("") 
    const [Deadline,setDeadline] = useState("") 
    const [Industry,setIndustry] = useState("")   
    

    const baseUrl = 'http://localhost:8080/api/v1/job';
    //form function
    const handeleSubmit =async (e) =>{
        e.preventDefault();
      try{
        const res = await axios.post(`${baseUrl}/post/${cid}`,
        {Title,Description,Location,Salary,Deadline,Industry});
        if(res && res.data.success){  
            toast(res.data.message); 
            res.status ===201 ? (navigate('/company-dashboard')) :(toast("Error in creating job post"))  ;
            
        }
      }catch(error){ 
        console.log(error);
      }
    }
  return (
    <><div className='form-container'>
                
    <form onSubmit={handeleSubmit}>
    <h1 className='title'>Post a job id : {cid}</h1>
    <div className="mb-3"> 
            <input
                type="text"
                value={Title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
                id="InputAddress"
                placeholder='Title'
                required />
        </div>
        <div className="mb-3"> 
            <input
                type="text"
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
                id="InputAddress"
                placeholder='job description'
                required />
        </div>
        <div className="mb-3"> 
            <input
                type="text"
                onChange={(e) => setLocation(e.target.value)}
                className="form-control"
                id="InputName"
                placeholder='Location'
                value={Location}
                required
                />
        </div>
        <div className='mb-3'>
          <select
            placeholder="Industry"
            showSearch className="form-control"
            size="large"
            onChange={(e) => setIndustry(e.target.value)}
          >
            <option value="" selected disabled>Industry</option>
            <option value="Technology">Technology</option>
            <option value="Management">Management</option>
            <option value="Finance">Finance</option>
            <option value="Operations">Operations</option>
            <option value="Marketing">Marketing</option>
            <option value="Others">Others</option>
          </select></div> 
        <div className="mb-3"> 
            <input
                type="text"
                onChange={(e) => setSalary(e.target.value)}
                className="form-control"
                id="InputName"
                placeholder='Salary'
                value={Salary}
                required
                />
        </div>
        <div className="mb-3"> 
        <label >Deadline Date</label>
            <input
                type="Date"
                value={Deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="form-control"
                id="InputEmail"
                required
                placeholder='Dead line'/>
        </div>
        {/* <div className="mb-3"> 
            <input type="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             className="form-control"
              id="InputPassword"
            placeholder='password'
            required
              />
        </div> */}
        <button type="submit" className="btn btn-primary">Register</button>
    </form>
  </div>
  <ToastContainer />
  </>  
  )
}

export default JobPost