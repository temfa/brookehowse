import React from "react";
import "./sidebar.css";
import Logo from "../../assets/Vector(4).png";
import Catalog from "../../assets/catalog.png";
import New from "../../assets/new.png";
import Logout from "../../assets/logout.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='sidebar-container'>
				<img src={Logo} alt='Logo' />
				<NavLink to='/' className='view'>
					View Site
				</NavLink>
				<div className='sidebar-links'>
					<div className='sidebar-logo'>
						<img src={Catalog} alt='catalog' />
						<NavLink to='/catalog'>Catalog</NavLink>
					</div>
					<div className='sidebar-logo'>
						<img src={New} alt='New' />
						<NavLink to='/new'>Create New</NavLink>
					</div>
					<div className='sidebar-logo logout'>
						<img src={Logout} alt='New' />
						<NavLink to='/new'>Logout</NavLink>
					</div>
				</div>
				<p className='copy-right'>
					(c) 2022, All Rights Reserved by Brookehowse Realtors
				</p>
			</div>
		</div>
	);
};

export default Sidebar;
