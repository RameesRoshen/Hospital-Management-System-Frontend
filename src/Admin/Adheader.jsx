import React, { useContext } from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/abc-high-resolution-logo-transparent.png'
import { isAuthTokenContext } from '../Context/ContextShare';
import { useNavigate } from 'react-router-dom';

function Adheader({adhome}) {


  const {isAuthToken,setIsAuthToken} =useContext(isAuthTokenContext)
  const navigate =useNavigate()
  const handleLogout =()=>{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("existingUser")
    setIsAuthToken(false)
    navigate('/adlogin')
  
  }

  return (
    <div style={{position:'fixed',top: 0, left: 0, right: 0, zIndex: 1000 }}>
        
        <Navbar bg="light">
  <Container>
    <img className='ms-0' style={{ width: '60px' }} src={Logo} alt="no image" />
  
  
    <h2 className='text-center text-dark fw-bold '>ADMINISTRATION</h2>
      <div className="me-1">
        <button onClick={handleLogout} className='btn btn-success rounded'>LOGOUT</button>
      </div>
 
  </Container>
</Navbar>



            
    </div>
  )
}

export default Adheader



