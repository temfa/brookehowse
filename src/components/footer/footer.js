import React from "react";
import Button from "../styles/Button.styled";
import Container from "../styles/Container.styled";
import "./footer.css";
import Logo from "../../assets/Vector(5).png";

const Footer = () => {
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
							<p>Home</p>
							<p>About</p>
							<p>Services</p>
							<p>Properties</p>
							<p>Careers</p>
						</div>
						<div className='help-links'>
							<p>Find Property</p>
							<p>Request Consultation</p>
							<p>Projects</p>
							<p>Contact</p>
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
						<p>(c) 2022, All Rights Reserved by Brookehowse Realtors</p>
					</Container>
				</div>
			</div>
		</div>
	);
};
export default Footer;
