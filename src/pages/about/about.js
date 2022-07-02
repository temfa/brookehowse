import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Container from "../../components/styles/Container.styled";
import Rectangle from "../../assets/Rectangle 29.png";
import House from "../../assets/Rectangle 25(1).png";
import CEO from "../../assets/Rectangle 27.jpg";
import Mission from "../../assets/Rectangle 30(1).png";
import Vision from "../../assets/Rectangle 31(1).png";
import "./about.css";
import Footer from "../../components/footer/footer";
import AboutStyle from "../../components/styles/About.styled";
import ValueStyle from "../../components/styles/Value.styled";
import { db } from "../../utils/firebase-config";
import { ref, onValue } from "firebase/database";
import Loader from "../../components/loader/loader";
import Whatsapp from "../../assets/whatsapp.png";

const About = () => {
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
				<div className='about'>
					<div className='about-container'>
						<Container>
							<Header color='white' />
							<div className='about-header'>
								<div className='about-header-text'>
									<h2>BrookeHowse Realtors</h2>
									<p>
										Brookehowse Real Estate Limited was established in 2011 and
										is based in Lagos State, Nigeria. We offer real estate
										services with world-class professionalism in the achievement
										of comfort, luxury and affordable accommodation. Over the
										years, the organization has recorded remarkable achievements
										through the delivery of flawless real estate services to our
										numerous clientele.
									</p>
								</div>
								<div className='about-header-img'>
									<img src={Rectangle} alt='rectangle' className='rectangle3' />
									<div>
										<img src={House} alt='House' />
									</div>
								</div>
							</div>
						</Container>
					</div>
					<AboutStyle padding='200px 0px'>
						<div className='mission-img'>
							<img src={Mission} alt='mission' />
						</div>
						<div className='mission-text'>
							<h3>Mission</h3>
							<p>
								To provide first class service to all our clients. Delivering
								the dream of affordable luxury homes and creating wealth
								opportunities for our clients through a seamless transaction.
							</p>
						</div>
					</AboutStyle>
					<AboutStyle>
						<div className='mission-text'>
							<h3>Vision</h3>
							<p>
								To be the leader in providing world class real estate services
								and solutions in Nigeria and beyond.
							</p>
						</div>
						<div className='mission-img'>
							<img src={Vision} alt='mission' />
						</div>
					</AboutStyle>
					<AboutStyle padding='300px 0px'>
						<div className='ceo-img'>
							<img src={CEO} alt='ceo' />
						</div>
						<div className='ceo-text'>
							<h2>Dele Farotimi</h2>
							<h3>The CEO</h3>
							<p>
								He possesses vast wealth of experience in the Real Estate
								Sector. He spent the past couple of decades largely enmeshed in
								the Real Estate sector of the Nigerian economy. He witnessed the
								transformation of Lekki from the swamps of the nineties, to the
								massive dredging and construction sites of the early 2000s, when
								fuelled by the demand of the emerging middle class for housing,
								close to the several companies and entities in which they were
								employed in the banking, insurance, telecommunications, and
								other fast growing sectors of the economy that began to expand
								with the return to civilian rule. He also saw the growth of the
								serene swamplands, into the urban jungle of the 2020s.
							</p>
							<p>
								He remains committed to delivering authenticity, excellence and
								integrity on all projects.
							</p>
						</div>
					</AboutStyle>
					<Container>
						<h2 className='core-header'>Core Values</h2>
						<div className='core-values'>
							<ValueStyle bg='#0B0728' width='28%'>
								<p>Commitment to excellence</p>
							</ValueStyle>
							<ValueStyle bg='#BC9144' width='18%'>
								<p>Efficiency</p>
							</ValueStyle>
							<ValueStyle bg='#BC9144' width='23%'>
								<p>Respect</p>
							</ValueStyle>
							<ValueStyle bg='#0B0728' width='23%'>
								<p>Accountability</p>
							</ValueStyle>
						</div>
						<div className='core-container'>
							<ValueStyle bg='#0B0728' width='45%'>
								<p>Integrity in interaction and transaction delivery</p>
							</ValueStyle>
							<ValueStyle bg='#0B0728' width='50%'>
								<p className='exact-core'>
									Solution-Based: Constantly aimed at providing solutions to
									problems in real estate industry
								</p>
							</ValueStyle>
						</div>
					</Container>
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

export default About;
