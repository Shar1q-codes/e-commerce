import React from 'react'
import {NavLink} from 'react-router-dom'
import bag from "./Images/Web/bag_icon.svg"
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from 'react-redux';

const Header = () => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    const state = useSelector((state)=>state.addItem)
  return (
    <div>
        <div className='top-bar'>
            
            
            <div className='top-bar-right'>
                <div>
                    {
                        isAuthenticated && <p>{user.email}</p>
                    }
                </div>
                <div className='profile-div'>
                    {
                        isAuthenticated ? <button onClick={() => logout({ returnTo: window.location.origin })} className="logout-btn">
                            Log Out
                        </button> || <p>{user.name}</p>
                        :<button onClick={() => loginWithRedirect()} className='login-btn'>Log In/Sign Up</button>
                
                    }
                
                </div>
                <NavLink to='/cart' className='link'>
                <div className='shop-div'>
                    <img src={bag} alt="shop-icon" className='shop-icon'/>
                    <p>{state.length}</p>
                </div>
                </NavLink>
                
            </div>
        </div>
        <div className='nav-bar'>
            <div className='shop-name'>
                <p><span>i</span>SHOP</p>
            </div>
            <div className='navigations'>
                <ul>
                    <li><NavLink to='/' className='link'>HOME</NavLink></li>
                    <li><NavLink to='/store' className='link'>STORE</NavLink> </li>
                    <li><NavLink to='/store' className='link'>IPHONE</NavLink></li>
                    <li><NavLink to='/store' className='link'>IPAD</NavLink></li>
                    <li><NavLink to='/store' className='link'>ACCESSORIES</NavLink></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header