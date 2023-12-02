import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {  toast } from 'react-toastify';
import './misStyle.css'
import JobComponent from './JobComponent';

const IndustryJob = () => {

  const params = useParams();
  const [jobs,setJobs] = useState([]);
  const [msg,setMsg]  = useState(false)

  const baseURl = 'http://localhost:8080/api/v1/job/Industry';
  useEffect(()=>{

    const getJobsByIndustry = async() =>{
      try{
            const res = await axios.get( `${baseURl}/${params.id}`);
            if(res.data.data.length===0) setMsg(!msg)
            if (res.status===201)
             {
                  setJobs(res.data.data)
          }else{
            toast(res.data.message)
          }
      }catch{
        toast("Error in getting product list")
      }
    }
    getJobsByIndustry();
  },[])


    return (
        <div className='industry-main'>
            <h1>{params.id}</h1>
            <div className='industry-content'>
           { msg && <p>Currently no Jobs available in {params.id} field.</p>}
            {jobs.map((item)=>{
              return(<>
                <JobComponent loc = {item.Location} salary={item.Salary} Deadline={item.Deadline} Industry={item.Industry} Title = {item.Title} Desc={item.Description}/>
              </>)
            })}
      
            </div>
        </div>
    )
}

export default IndustryJob