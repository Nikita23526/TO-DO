import { useEffect } from 'react'
import { useNavigate } from 'react-router';

function Logout() {

    const navigate=useNavigate("");
  
    useEffect(()=>{
        localStorage.setItem("token","");
        navigate("/auth/login")
        
    })
  
  
}

export default Logout