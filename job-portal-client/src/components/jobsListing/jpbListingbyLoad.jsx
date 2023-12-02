import React, {useState, useEffect} from 'react'
import './JobListing.css'
import axios from 'axios'
import {toast} from 'react-toastify'
import JobComponent from '../missellaneous/JobComponent'


const JpbListingbyLoad = () => {

    const [page, setPage] = useState(1);
    const [loading,setLoading] = useState(false)
    const [Products,setProducts]= useState([])

       //loading
       const loadMore=async()=>{
        try{
            setLoading(true)
            const{data } =  await axios.get(`http://localhost:8080/api/v1/job/product-list/${page}`) ;  
            setLoading(false)
            setProducts([...Products,...data.data])
        }catch(error){
            setLoading(true)
            toast('Error in getting products');
            setLoading(false)
        }
    }

    useEffect(()=>{
        if(page===1)return;
        loadMore();
    },[page])
  return (
   <>
    <div className='jl-outer'>
        
            <h1>Jobs </h1>
            <div className='jl-main'>
            {
                Products.map((item)=>{
                    return(<>
                        <JobComponent cid={item.c_id} loc = {item.Location} salary={item.Salary} Deadline={item.Deadline} Industry={item.Industry} Title={item.Title} Desc={item.Description}/>
                    </>)
                })
            }
            <div className="m-2 p-3">
            
            {Products  && (  
          <button
            className="btn btn-warning"
            onClick={(e) => {
              e.preventDefault();
              setPage(page + 1);
            }}
          >
            {loading ? "Loading ..." : "Loadmore"}
          </button>
        )
            }            
      </div>
        </div>
    </div>
   </>
  )
}

export default JpbListingbyLoad