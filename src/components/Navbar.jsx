import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div style={{height:'50px',width:'100%',backgroundColor:'#aaa234',display:'flex',justifyContent:'center',gap:'15px',alignItems:'center'}}>
        {/* <Link to='/'>Home</Link>
        <Link to='/'>About Us</Link> */}
         <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About Us</NavLink>
        {/* <button onClick={()=> navigate(-1)}>back</button>
        <button onClick={()=> navigate('/')}>Home</button>
        <button onClick={()=> navigate('/about')}>About Us</button> */}
    </div>
  )
}

export default Navbar