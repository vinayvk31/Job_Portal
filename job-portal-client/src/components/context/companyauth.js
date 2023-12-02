import {useState, useEffect, useContext, createContext} from "react"; 

const companyAuthContext = createContext();

const CompanyAuthProvider = ({children}) => {

    const [companyAuth,
        setCompanyAuth] = useState({data: null, token: "",isCompanyLogin:false});

    // def axios.default.header.common['authorization' ] = auth?.token
    //default axios
//   axios.defaults.headers.common["Authorization"] = auth?.token;

    useEffect(() => {
        const data = localStorage.getItem('companyAuth'); 
        // console.log(JSON.parse(data));
        if (data) {
            const parseData = JSON.parse(data);
            setCompanyAuth({
                ...companyAuth,
                user: parseData.data[0],
                token: parseData.token

            })
            // console.log("hello parse data");
            // console.log(parseData);
            // console.log(auth);
        } 
        //eslint-next-disable
    }, [])

    return (
        <companyAuthContext.Provider value={[
            companyAuth,setCompanyAuth
        ]}>
            {children}
        </companyAuthContext.Provider>
    );
}

// custom hook
const useCompanyAuth = () => useContext(companyAuthContext);

export {useCompanyAuth, CompanyAuthProvider};