 import './App.css'; 
import Header from './components/Header/Header'; 
import { Route, Routes } from 'react-router-dom';
import RegisterUser from './pages/auth/RegisterUser';
import HomePage from './pages/home/HomePage';
import LoginUser from './pages/auth/LoginUser';
import { ToastContainer } from 'react-toastify';
import UserDashboard from './pages/user-dashboard/UserDashboard';
import Jobs from './pages/jobs/Jobs';
import IndustryJob from './components/missellaneous/IndustryJob';
import About from './pages/other/about';
import CompanyDashboard from './pages/company/companu-dashbard';
import RegisterCompanny from './pages/auth/RegisterCompanny';
import LoginCOmpany from './pages/auth/LoginCOmpany';
import JobPost from './pages/company/JobPost';
import AppDet from './pages/company/AppDet';
import Contact from './pages/other/contact';

function App() {
     return ( <>
     <Header/>
     <Routes>
           <Route path='/' element={<HomePage/>}/>
          <Route path='/register-user' element={<RegisterUser/>}/>
          <Route path='/register-company' element={<RegisterCompanny/>}/>
          <Route path='/login-company' element={<LoginCOmpany/>}/>
          <Route path='/login-user' element={<LoginUser/>}/>
          <Route path='/user-dashboard' element={<UserDashboard/>}/>
          <Route path='/company-dashboard' element={<CompanyDashboard/>}>
             
          </Route>  <Route path='/job-post' element={<JobPost/>}/> 
          <Route path='/app-details' element={<AppDet/>}/> 
          <Route path='/contact' element={<Contact/>}/> 
          
          <Route path='/job-listings' element={<Jobs/>}/>
          <Route path='/industry/:id' element={<IndustryJob/>}/>
          <Route path='/about' element={<About/>}/>
     </Routes>
     <ToastContainer/>
     </>
    );
}

export default App;
