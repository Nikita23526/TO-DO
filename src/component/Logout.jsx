import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router';

function Logout() {

    const navigate=useNavigate("");
  
    useEffect(()=>{
        localStorage.setItem("token","");
        navigate("/auth/login")
        
    })
  
  
}

export default Logout