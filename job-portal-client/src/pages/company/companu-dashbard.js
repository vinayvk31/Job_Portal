import { Link } from "react-router-dom";
import { useCompanyAuth } from "../../components/context/companyauth"
import './com.css'

const  CompanyDashboard = () => {

  const [companyAuth, setCompanyAuth]= useCompanyAuth();

  return (
    <><div className="companyouter">
      <h1>Company details</h1>
      <p>Company ID :{companyAuth.company.id}</p>
      <p>Company name : {companyAuth.company?.name}</p> 
      <p>company Website : <a href={companyAuth.company?.website}>{companyAuth.company?.website}</a></p>
      <p>email : {companyAuth.company?.email}</p>
      <div className="company-main">
          <Link to='/job-post'>Post a job </Link>
          <Link to="/app-details">Find Who has applied for jobs</Link>
      </div>
      </div> </>
  )
}

export default  CompanyDashboard