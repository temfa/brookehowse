import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Container from "../../components/styles/Container.styled";
import "../properties/properties.css";
import Location from "../../assets/Group.png";
import Swimming from "../../assets/Group 431.png";
import Game from "../../assets/Group 432.png";
import Network from "../../assets/Vector(9).png";
import ArrowLeft from "../../assets/Vector(10).png";
import ArrowRight from "../../assets/Vector(11).png";
import Cinema from "../../assets/Vector(7).png";
import Camera from "../../assets/Vector(6).png";
import Power from "../../assets/Vector(8).png";
import PropertiesContainer from "../../components/styles/Propeties.styled";
import Footer from "../../components/footer/footer";
import Form from "../../components/form/form";
import { Image } from "cloudinary-react";
import { db } from "../../utils/firebase-config";
import { ref, onValue } from "firebase/database";
import Loader from "../../components/loader/loader";
import { useLocation } from "react-router-dom";
import Whatsapp from "../../assets/whatsapp.png";

const Property = () => {
	window.scrollTo(0, 0);
	const tempPropertyData = localStorage.getItem("Properties");
	const [properties] = useState(() => {
		if (tempPropertyData === "undefined") {
			return {};
		} else if (tempPropertyData === null) {
			return {};
		} else {
			return JSON.parse(tempPropertyData);
		}
	});
	const locationUrl = useLocation();
	useEffect(() => {
		if (locationUrl.pathname === "/property") {
			window.location.reload(false);
		}
	}, []);

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
				<div className='properties'>
					<div className='properties-container'>
						<Container>
							<Header />
							<div className='properties-header'>
								<div className='properties-header-text'>
									<div className='location'>
										<img src={Location} alt='location' />
										<p>{properties.first.location}</p>
									</div>
									<h2>{properties.first.propertyName}</h2>
									<p>
										Brookehowse Real Estate was established in 2011 and it's
										presently based in Lagos state, Nigeria.
									</p>
								</div>
								<div className='properties-header-img'>
									<Image cloudName='temfad' publicId={properties.first.image} />
								</div>
							</div>
						</Container>
					</div>
					<PropertiesContainer>
						<div className='properties-text'>
							<p>{properties.second.descriptionOneText}</p>
						</div>
						<div className='properties-img'>
							<Image
								cloudName='temfad'
								publicId={properties.second.descriptionOnePic}
							/>
						</div>
					</PropertiesContainer>
					<div className='properties-complex'>
						<div className='complex-img'>
							<Image
								cloudName='temfad'
								publicId={properties.third.descriptionTwoPic}
							/>
						</div>
						<div className='complex-text'>
							<p>{properties.third.descriptionTwoText}</p>
						</div>
					</div>
					<PropertiesContainer>
						<div className='properties-text'>
							<p>{properties.fourth.descriptionThreeText}</p>
						</div>
						<div className='properties-img'>
							<Image
								cloudName='temfad'
								publicId={properties.fourth.descriptionThreePic}
							/>
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

					{/* <Container>
					<div className='explore-header'>
						<h2>Explore Gallery</h2>
						<div className='explore-header-img'>
							<img src={ArrowLeft} alt='Arrow' />
							<img src={ArrowRight} alt='Arrow' />
						</div>
					</div>
				</Container> */}
					<div className='whatsapp'>
						<a
							href='https://wa.me/+2348188434844'
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

export default Property;
