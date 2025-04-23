import React from 'react'
import "./Sidebar.css"
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/add' className="sidebar-option">
                <img src={assets.add_icon} alt="" />
                <p>Adaugă articole</p>
            </NavLink>
        </div>
        <div className="sidebar-options">
            <NavLink to='/list' className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>Listă de produse</p>
            </NavLink>
        </div>
        <div className="sidebar-options">
            <NavLink to='/orders' className="sidebar-option">
                <img src={assets.order_icon} alt="" />
                <p>Comenzi</p>
            </NavLink>
        </div>
      
    </div>
  )
}

export default Sidebar
