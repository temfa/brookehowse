import React from "react";
import Button from "../styles/Button.styled";
import Container from "../styles/Container.styled";
import "./footer.css";
import Logo from "../../assets/Vector(5).png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Footer = () => {
	const [date, setDate] = useState("");
	useEffect(() => {
		let newDate = new Date();
		setDate(newDate.getFullYear());
	}, []);

	return (
		<div className='footer-container'>
			<div className='footer-newsletter'>
				<h2>Subscribe to our Newsletter</h2>
				<p>To join our vast community</p>
				<div className='newsletter-input'>
					<input type='text' placeholder='Enter Email Address' />
					<Button padding='28px 52px' bg='#bc9144'>
						Send
					</Button>
				</div>
			</div>
			<div className='footer-body'>
				<Container>
					<div className='footer-cont'>
						<div className='footer-logo'>
							<img src={Logo} alt='logo' />
						</div>
						<div className='quick-links'>
							<NavLink to='/'>Home</NavLink>
							<NavLink to='/about'>About</NavLink>
							<NavLink to='/properties'>Properties</NavLink>
							<NavLink to='/contact'>Contact Us</NavLink>
						</div>
						<div className='help-links'>
							<NavLink to='/terms'>Terms</NavLink>
							<NavLink to='/privacy'> Privacy</NavLink>
						</div>
						<div className='footer-address'>
							<p>
								15A, Ogbunike Street, Off Wole Olateju Crescent, Off Admiralty
								Way, Lekki Phase 1, Lagos
							</p>
							<p className='mail'>info@brookehowse.com</p>
							<p className='phone'>+234-01-2716885</p>
						</div>
					</div>
				</Container>
				<div className='footer-copyright'>
					<Container>
						<p>(c) {date} All Rights Reserved, Factorial Systems</p>
					</Container>
				</div>
			</div>
		</div>
	);
};
export default Footer;
