import React from "react";
import Header from "../../components/header/header";
import Button from "../../components/styles/Button.styled";
import Container from "../../components/styles/Container.styled";
import "./landing.css";
import Overlay from "../../assets/Rectangle 2.png";
import Lady from "../../assets/Rectangle 6.png";
import House from "../../assets/Rectangle 25.png";
import Vector from "../../assets/Vector.png";
import Vector1 from "../../assets/Vector(1).png";
import Vector2 from "../../assets/Vector(2).png";
import Vector3 from "../../assets/Vector(3).png";
import Footer from "../../components/footer/footer";
import Form from "../../components/form/form";
import Slider from "../../components/slider/slider";

const Landing = () => {
	return (
		<div className='landing'>
			<div className='landing-header'>
				<img src={Overlay} alt='Overlay' className='overlay' />
				<div className='landing-cont'>
					<Container>
						<Header />
						<div className='welcome-container'>
							<div className='welcome-text'>
								<h2>Smart apartments that connects people with their dreams</h2>
								<p>
									We offer real estate services with world-class professionalism
									in the{" "}
									<span>
										<br />
										achievement of comfort, luxury and affordable accommodation.
									</span>
								</p>
								<Button padding='28px 41px' bg='#bc9144'>
									Get Started
								</Button>
							</div>
							<div className='welcome-img'>
								<img src={House} alt='House' />
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
			<div className='slideshow-container'>
				<Slider />
			</div>
			<Container>
				<iframe
					style={{ width: "100%", height: "500px", margin: "150px 0px" }}
					id='gmap_canvas'
					src='https://maps.google.com/maps?q=15A,%20Ogbunike%20Street,%20Off%20Wole%20Olateju%20Crescent,%20Off%20Admiralty%20Way,%20Lekki%20Phase%201,%20Lagos&t=&z=15&ie=UTF8&iwloc=&output=embed'
					frameborder='0'
					scrolling='no'
					marginheight='0'
					marginwidth='0'></iframe>
			</Container>
			<div className='consultation'>
				<div className='consultation-body'>
					<div className='consultation-img'>
						<img src={Lady} alt='lady' />
					</div>
					<div className='consultation-form'>
						<Form title='Request for consultation' size='60px' />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Landing;
