import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './components/context/auth';
import  {CompanyAuthProvider} from './components/context/companyauth'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CompanyAuthProvider>
    <AuthProvider>
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>
    </AuthProvider>
    </CompanyAuthProvider>
);
