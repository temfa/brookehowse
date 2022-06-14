import React from "react";
import Header from "../../components/header/header";
import Container from "../../components/styles/Container.styled";
import "./properties.css";
import Location from "../../assets/Group.png";
import Swimming from "../../assets/Group 431.png";
import Game from "../../assets/Group 432.png";
import Network from "../../assets/Vector(9).png";
import ArrowLeft from "../../assets/Vector(10).png";
import ArrowRight from "../../assets/Vector(11).png";
import Cinema from "../../assets/Vector(7).png";
import Camera from "../../assets/Vector(6).png";
import Power from "../../assets/Vector(8).png";
import House from "../../assets/HN 2 1.png";
import House1 from "../../assets/HN 3 1.png";
import House2 from "../../assets/HN 7 1.png";
import House3 from "../../assets/HN 4 1.png";
import PropertiesContainer from "../../components/styles/Propeties.styled";
import Footer from "../../components/footer/footer";
import Form from "../../components/form/form";

const Properties = () => {
	return (
		<div className='properties'>
			<div className='properties-container'>
				<Container>
					<Header />
					<div className='properties-header'>
						<div className='properties-header-text'>
							<div className='location'>
								<img src={Location} alt='location' />
								<p>Ikeja, Lagos</p>
							</div>
							<h2>Helen’s Nest</h2>
							<p>
								Brookehowse Real Estate Limited was established in 2011 and is
								based in Lagos State, Nigeria.
							</p>
						</div>
						<div className='properties-header-img'>
							<img src={House} alt='house' />
						</div>
					</div>
				</Container>
			</div>
			<PropertiesContainer>
				<div className='properties-text'>
					<p>
						Helen’s Nest project was birthed out of the realization of an acute
						shortage of suitable accommodation for the expatriate and senior
						Nigerian staff of the multiple companies that are either coming or
						are already in the Free Trade Zone and its environs. Helen’s Nest is
						conceived as a purpose built, niche targeting product. It comprises
						of 48 generously proportioned two bedroom serviced apartments (all
						en-suite).
					</p>
				</div>
				<div className='properties-img'>
					<img src={House1} alt='House' />
				</div>
			</PropertiesContainer>
			<div className='properties-complex'>
				<div className='complex-img'>
					<img src={House3} alt='House' />
				</div>
				<div className='complex-text'>
					<p>
						The fully serviced complex promises luxury with ample facilities
						designed to ensure the maximum comfort and convenience of the
						residents. There is a lawn tennis court, a well-equipped gymnasium
						and a swimming pool. The project offers appreciably more: It is
						situated by two bodies of water. There is a freshwater lagoon
						nesting by its border, and the Atlantic Ocean right in front of it.
						The intention is to have a jetty on the lagoon for residents who
						might be interested in sailing on the lagoon.
					</p>
				</div>
			</div>
			<PropertiesContainer>
				<div className='properties-text'>
					<p>
						Helen’s Nest is being offered off plan, for a limited period, on a
						1st come first serve basis, subject to contract at the price of
						<span> 45,000,000.00 (forty five million Naira)</span>, subject to
						availability. Off plan offer lasts till 30 June, 2022, and we are
						confident that it will be valued at 60,000,000.00 (sixty million
						Naira) in 18 months, upon completion of the project in February
						2024.
					</p>
					<p>
						<span>Payment Terms</span>
					</p>
					<p>50% initial deposit, once offer is accepted</p>
					<p>25% further payment, after 6 months of 1st payment</p>
					<p>25% balance payment, after 6 months of 2nd payment</p>
				</div>
				<div className='properties-img'>
					<img src={House2} alt='House' />
				</div>
			</PropertiesContainer>
			<div className='appointment'>
				<div className='appointment-form'>
					<Form title='Schedule an Appointment' size='45px' />
				</div>
				<div className='amenities'>
					<h2>Amenities</h2>
					<div className='amenities-body'>
						<div>
							<div className='amenities-img'>
								<img src={Swimming} alt='swimming' />
							</div>
							<p>Swimming pool</p>
						</div>
						<div>
							<div className='amenities-img'>
								<img src={Network} alt='Network' />
							</div>
							<p>Good road network</p>
						</div>
						<div>
							<div className='amenities-img'>
								<img src={Power} alt='Power' />
							</div>
							<p className='power'>24/7 Power supply</p>
						</div>
					</div>
					<div className='amenities-body'>
						<div>
							<div className='amenities-img'>
								<img src={Game} alt='swimming' />
							</div>
							<p>Game room</p>
						</div>
						<div>
							<div className='amenities-img'>
								<img src={Cinema} alt='Network' />
							</div>
							<p>Cinema room</p>
						</div>
						<div>
							<div className='amenities-img'>
								<img src={Camera} alt='Power' />
							</div>
							<p>Surveillance camera</p>
						</div>
					</div>
				</div>
			</div>
			<Container>
				<div className='explore-header'>
					<h2>Explore Gallery</h2>
					<div className='explore-header-img'>
						<img src={ArrowLeft} alt='Arrow' />
						<img src={ArrowRight} alt='Arrow' />
					</div>
				</div>
			</Container>
			<Footer />
		</div>
	);
};

export default Properties;
