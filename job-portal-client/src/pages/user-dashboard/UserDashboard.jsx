import React from 'react'
import './userdashboard.css'
import { useAuth } from '../../components/context/auth'
// import { useCompanyAuth } from '../../components/context/companyauth'

const UserDashboard = () => {

    const [ auth, setAuth] = useAuth()
    // const [companyAuth, setCompanyAuth] = useCompanyAuth()
  return (<>
    {/* <div>UserDashboard</div>
    <h1>{JSON.stringify(auth,null,10)}</h1> 
    <br/>
    <h1>{JSON.stringify(companyAuth,null,10)}</h1>  */}
    <div className='u-dashboard-outer'>
        <div className='u-header'>
            <p>username : {auth.user.username}</p>
            <p>name : {auth.user.name}</p>
            <p>email : {auth.user.email}</p> 
            <div><button> Profile </button> <button>Jobs Applied </button></div>
        </div>
    </div>
    </> )
}

export default UserDashboard