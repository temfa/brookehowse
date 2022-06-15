import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Vector(4).png";
import Button from "../styles/Button.styled";
import "./header.css";

const Header = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	return (
		<div className='header-container'>
			<div className='header-logo'>
				<img src={Logo} alt='Logo' />
				<div className='menu-icon' onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"} />
				</div>
			</div>
			<div className={click ? "header-nav actived" : "header-nav"}>
				<NavLink to='/' onClick={closeMobileMenu}>
					Home
				</NavLink>
				<NavLink to='/about' onClick={closeMobileMenu}>
					About
				</NavLink>
				<NavLink to='/properties' onClick={closeMobileMenu}>
					Properties
				</NavLink>
				<NavLink
					to='/contact'
					className='nav-links-mobile'
					onClick={closeMobileMenu}>
					<Button padding='23px 65px' bg='#bc9144'>
						Contact
					</Button>
				</NavLink>
			</div>
			<NavLink to='/contact' className='nav-links'>
				<Button padding='23px 65px' bg='#bc9144'>
					Contact
				</Button>
			</NavLink>
		</div>
	);
};

export default Header;
