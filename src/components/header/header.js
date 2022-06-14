import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Vector(4).png";
import Button from "../styles/Button.styled";
import "./header.css";

const Header = () => {
	return (
		<div className='header-container'>
			<div className='header-logo'>
				<img src={Logo} alt='Logo' />
			</div>
			<div className='header-nav'>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/about'>About</NavLink>
				<NavLink to='/properties'>Properties</NavLink>
			</div>
			<NavLink to='/contact'>
				<Button padding='23px 65px' bg='#bc9144'>
					Contact
				</Button>
			</NavLink>
		</div>
	);
};

export default Header;
