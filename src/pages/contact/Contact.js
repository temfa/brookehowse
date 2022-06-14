import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Container from "../../components/styles/Container.styled";
import "./contact.css";
import House from "../../assets/Rectangle 30(2).png";
import Twitter from "../../assets/twitter.svg";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Be from "../../assets/be.svg";
import Linken from "../../assets/linken.svg";

const Contact = () => {
	return (
		<div className='contact'>
			<div className='contact-header'>
				<Container>
					<Header />
					<div className='contact-container'>
						<div className='contact-header-text'>
							<h2>Get in touch with BrookHowse Realtors</h2>
							<p>
								15A, Ogbunike Street, Off Wole Olateju Crescent, Off Admiralty
								Way, Lekki Phase 1, Lagos
							</p>
							<p className='mail'>info@brookehowse.com</p>
							<p className='phone'>+234-01-2716885</p>
							<div className='social-icons'>
								<img src={Twitter} alt='Twitter' />
								<img src={Facebook} alt='Facebook' />
								<img src={Linken} alt='Linken' />
								<img src={Instagram} alt='Instagram' />
								<img src={Be} alt='Be' />
							</div>
						</div>
						<div className='contact-header-img'>
							<img src={House} alt='House' />
						</div>
					</div>
				</Container>
			</div>
			<Footer />
		</div>
	);
};

export default Contact;
