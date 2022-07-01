import React from "react";
import Button from "../styles/Button.styled";
import Container from "../styles/Container.styled";
import "./footer.css";
import Logo from "../../assets/Vector(5).png";
import Twitter from "../../assets/twitter2.svg";
import Facebook from "../../assets/facebook2.svg";
import Instagram from "../../assets/instagram2.svg";
import Be from "../../assets/be2.svg";
import Linken from "../../assets/link2.svg";
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
					<Button padding='20px 52px' bg='#bc9144'>
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
							<p>Menu</p>
							<NavLink to='/'>Home</NavLink>
							<NavLink to='/about'>About</NavLink>
							{/* <NavLink to='/properties'>Properties</NavLink> */}
							<NavLink to='/contact'>Contact Us</NavLink>
						</div>
						<div className='help-links'>
							<p>Legal</p>
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
							<div className='socials'>
								<img src={Twitter} alt='socials' />
								<img src={Facebook} alt='socials' />
								<img src={Linken} alt='socials' />
								<img src={Instagram} alt='socials' />
								<img src={Be} alt='socials' />
							</div>
						</div>
					</div>
				</Container>
				<div className='footer-copyright'>
					<Container>
						<p>
							<span>(c) {date} All Rights Reserved, </span> 
							<a href="" target="_blank">Factorial Systems</a>
						</p>
					</Container>
				</div>
			</div>
		</div>
	);
};
export default Footer;
