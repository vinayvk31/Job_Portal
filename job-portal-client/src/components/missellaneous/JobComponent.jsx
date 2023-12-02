import React from 'react'
import './misStyle.css' 
import { useAuth } from '../context/auth'
import {  toast } from 'react-toastify';
import axios from 'axios' 

const JobComponent = ({cid,Title,loc,Deadline,Industry,salary,Desc}) => { 

  const [auth,setAuth] = useAuth();
  const c_id = cid;
console.log(auth);
  const baseUrl = 'http://localhost:8080/api/v1/job';
  const handleApply = async() =>{
    const u_id = await auth.user?.id;
    try{
      const res = await axios.post(`${baseUrl}/apply`,
        {u_id,c_id});
   

       

    }catch(error){
      toast("Something went wrong"); 
    }

  }
  return (<>
    <div className='job-container'>
    <div className='div1'>
        <h5>Title : {Title}</h5>
        <p>Description : {Desc}</p>
        <p>Industry : {Industry}</p>
        <p>Location : {loc}</p>

        </div>
    <div className='div2'>
    <h6>Salary : {salary}</h6>
    <p>Deadline :{Deadline}</p>
    <button onClick={handleApply}>Apply Now</button>

    </div>
    </div>
  </>  )
}

export default JobComponent