import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Button from "../../components/styles/Button.styled";
import Container from "../../components/styles/Container.styled";
import "./landing.css";
import Overlay from "../../assets/Rectangle 2.png";
import Lady from "../../assets/Rectangle 6.png";
import House from "../../assets/Rectangle 25.png";
import Rectangle from "../../assets/Rectangle 29.png";
import Rectangle2 from "../../assets/Rectangle 31.png";
import Log from "../../assets/Group 444.png";
import Chat from "../../assets/Group 443.png";
import Arrow from "../../assets/arrowup.png";
import Arrowleft from "../../assets/arrowleft.png";
import Vector from "../../assets/Vector.png";
import Group from "../../assets/Group 419.png";
import Vector1 from "../../assets/Vector(1).png";
import Vector2 from "../../assets/Vector(2).png";
import Vector3 from "../../assets/Vector(3).png";
import Footer from "../../components/footer/footer";
import Form from "../../components/form/form";
import Slider from "../../components/slider/slider";
import { db } from "../../utils/firebase-config";
import { ref, onValue } from "firebase/database";
import Loader from "../../components/loader/loader";
import Whatsapp from "../../assets/whatsapp.png";

const Landing = () => {
	window.scrollTo(0, 0);
	const [isLoaded, setIsLoaded] = useState(true);
	const [slideshowImg, setSlideshowImg] = useState("");
	useEffect(() => {
		onValue(ref(db), (snapshot) => {
			const data = snapshot.val();
			if (data !== null) {
				setSlideshowImg(Object.values(data.newProperty)[0]);
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
				<div className='landing'>
					<div className='landing-header'>
						<img src={Overlay} alt='Overlay' className='overlay' />
						<div className='landing-cont'>
							<Container>
								<Header color='#ffffff' fontSize='50px' />
								<div className='welcome-container'>
									<div className='welcome-text'>
										<h2>
											Smart apartments that connects people with their dreams
										</h2>
										<p>
											We offer real estate services with world-class
											professionalism with the
											<span>
												<br />
												aim to give you comfort, luxury an affordable
												accommodation.
											</span>
										</p>
										<Button padding='28px 41px' bg='#bc9144'>
											Get Started
											<span>
												<img src={Arrow} alt='arrow' />
											</span>
										</Button>
									</div>
									<div className='welcome-img'>
										<img src={Rectangle} alt='House' className='rectangle' />
										<div>
											<img src={House} alt='House' />
										</div>
									</div>
								</div>
							</Container>
						</div>
					</div>
					<div className='offer'>
						<Container>
							<div className='offer-body'>
								<div className='offer-text'>
									<p>BrookeHowse</p>
									<h2>What we offer</h2>
								</div>
								<div className='offer-conts'>
									<div className='offer-single'>
										<div className='single-offer'>
											<img src={Vector} alt='Vector' />
										</div>
										<h4>Property Devlopment</h4>
									</div>
									<div className='offer-single'>
										<div className='single-offer'>
											<img src={Vector1} alt='Vector' />
										</div>
										<h4>Luxury Apartment Sales</h4>
									</div>
									<div className='offer-single'>
										<div className='single-offer'>
											<img src={Vector2} alt='Vector' />
										</div>
										<h4>Apartment to Rent</h4>
									</div>
									<div className='offer-single'>
										<div className='single-offer'>
											<img src={Vector3} alt='Vector' />
										</div>
										<h4>Short let Accommodation</h4>
									</div>
								</div>
							</div>
						</Container>
					</div>
					<img src={Group} alt='group' className='group-vector' />
					<div className='slideshow-container'>
						<div className='slideshow-overlay'></div>
						<Slider
							sliderData={[
								{
									image: slideshowImg.first.image,
									heading: "Helen's Nest ",
									desc: "Brookehowse Real Estate Limited was established in 2011 and is based in Lagos State, Nigeria",
								},
								{
									image: slideshowImg.second.descriptionOnePic,
									heading: "Helen's Nest ",
									desc: "Brookehowse Real Estate Limited was established in 2011 and is based in Lagos State, Nigeria",
								},
								{
									image: slideshowImg.third.descriptionTwoPic,
									heading: "Helen's Nest ",
									desc: "Brookehowse Real Estate Limited was established in 2011 and is based in Lagos State, Nigeria",
								},
								{
									image: slideshowImg.fourth.descriptionThreePic,
									heading: "Helen's Nest ",
									desc: "Brookehowse Real Estate Limited was established in 2011 and is based in Lagos State, Nigeria",
								},
								{
									image: slideshowImg.fifth.amenitiesPic,
									heading: "Helen's Nest ",
									desc: "Brookehowse Real Estate Limited was established in 2011 and is based in Lagos State, Nigeria",
								},
							]}
						/>
					</div>
					<Container>
						<div className='map'>
							<iframe
								// style={{ width: "100%", height: "500px", margin: "150px 0px" }}
								id='gmap_canvas'
								src='https://maps.google.com/maps?q=15A,%20Ogbunike%20Street,%20Off%20Wole%20Olateju%20Crescent,%20Off%20Admiralty%20Way,%20Lekki%20Phase%201,%20Lagos&t=&z=15&ie=UTF8&iwloc=&output=embed'
								frameBorder='0'
								scrolling='no'
								marginHeight='0'
								title='Map'
								marginWidth='0'></iframe>
							<div className='map-details'>
								<p>
									Helen’s Nest project was birthed out of the realization of an
									acute shortage of suitable accommodation for the expatriate
									and senior Nigerian staff of the multiple companies that are
									either coming or are already in the Free Trade Zone and its
									environs. Helen’s Nest is conceived as a purpose built, niche
									targeting product. It comprises of 44 generously proportioned
									two bedroom serviced apartments (all en-suite).
								</p>
								<img src={Arrowleft} alt='Arrow' />
							</div>
						</div>
					</Container>
					<div className='consultation'>
						<div className='consultation-body'>
							<div className='consultation-img'>
								<img src={Log} alt='log' className='log' />
								<img src={Rectangle2} alt='' className='rectangle2' />
								<img src={Lady} alt='lady' />
								<img src={Chat} alt='chat' className='chat' />
							</div>
							<div className='consultation-form'>
								<Form title='Request for consultation' size='60px' />
							</div>
						</div>
					</div>
					<div className='whatsapp'>
						<a
							href='https://wa.me/+2348179461702'
							target='_blank'
							rel='noreferrer'>
							<img src={Whatsapp} alt='whatsapp' />
						</a>
					</div>
					<img src={Group} alt='group' className='group-vector2' />
					<Footer />
				</div>
			)}
		</>
	);
};

export default Landing;
