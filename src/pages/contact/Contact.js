import React, { useEffect, useState } from "react";
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
import { db } from "../../utils/firebase-config";
import { ref, onValue } from "firebase/database";
import Loader from "../../components/loader/loader";
import Whatsapp from "../../assets/whatsapp.png";
import Rectangle from "../../assets/Rectangle 29.png";

const Contact = () => {
	window.scrollTo(0, 0);
	const [isLoaded, setIsLoaded] = useState(true);
	useEffect(() => {
		onValue(ref(db), (snapshot) => {
			const data = snapshot.val();
			if (data !== null) {
				setIsLoaded(false);
			} else {
				setIsLoaded(false);
			}
		});
	}, []);
	return (
		<>
			{isLoaded ? (
				<Loader />
			) : (
				<div className='contact'>
					<div className='contact-header'>
						<Container>
							<Header color='white' />
							<div className='contact-container'>
								<div className='contact-header-text'>
									<h2>Get in touch with BrookHowse Realtors</h2>
									<p>
										15A, Ogbunike Street, Off Wole Olateju Crescent, Off
										Admiralty Way, Lekki Phase 1, Lagos
									</p>
									<p className='mail'>info@brookehowseestate.com</p>
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
									<img src={Rectangle} alt='rectangle' className='rectangle5' />
									<div>
										<img src={House} alt='House' />
									</div>
								</div>
							</div>
						</Container>
					</div>
					<div className='whatsapp'>
						<a
							href='https://wa.me/+2348179461702'
							target='_blank'
							rel='noreferrer'>
							<img src={Whatsapp} alt='whatsapp' />
						</a>
					</div>
					<Footer />
				</div>
			)}
		</>
	);
};

export default Contact;
