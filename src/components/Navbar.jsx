import React from 'react'
import { Link } from 'react-router-dom'
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div>
        <div className="navbar flex justify-center container items-center">
            <div className="logo"> 
                <img className='w-25' height={50} width={50} src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg" alt="" />
            </div>
            <div className="nav-links">
                <ul className='list-style'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cart"><BsCart3 /></Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar