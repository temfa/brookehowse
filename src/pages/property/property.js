import React, { useEffect, useState, useRef } from "react";
import Header from "../../components/header/header";
import Container from "../../components/styles/Container.styled";
import "./property.css";
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
import Whatsapp from "../../assets/whatsapp.png";
// import Rectangle from "../../assets/Rectangle 29.png";
// import Slider from "../../components/slider/slider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Property = () => {
	// window.scrollTo(0, 0);
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

	const settings = {
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 3,
		swipeToSlide: true,
		afterChange: function (index) {
			console.log(
				`Slider Changed to: ${index + 1}, background: #222; color: #bada55`
			);
		},
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					swipeToSlide: true,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					swipeToSlide: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					swipeToSlide: true,
				},
			},
		],
	};
	const change = useRef(null);

	return (
		<>
			<ToastContainer />
			{isLoaded ? (
				<Loader />
			) : (
				<div className='properties'>
					<div className='properties-container'>
						<Container>
							<Header color='white' />
							<div className='properties-header'>
								<div className='properties-header-text'>
									<div className='location'>
										<img src={Location} alt='location' />
										<p>{properties.first.location}</p>
									</div>
									<h2>{properties.first.propertyName}</h2>
								</div>
								<div className='properties-header-img'>
									{/* <img src={Rectangle} alt='rectangle' className='rectangle4' /> */}
									<div>
										<Image
											cloudName='temfad'
											publicId={properties.first.image}
										/>
									</div>
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
					{properties.third.descriptionTwoText === "" ? (
						<></>
					) : (
						<>
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
									<p>
										<span>Payment Terms</span>
									</p>
									<p>50% initial deposit, once offer is accepted</p>
									<p>25% further payment, after 6 months of 1st payment</p>
									<p>25% balance payment, after 6 months of 2nd payment</p>
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
											<p>Access Control</p>
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
						</>
					)}

					<Container>
						<div className='explore-header'>
							<h2>Explore Gallery</h2>
							<div className='explore-header-img'>
								<img
									src={ArrowLeft}
									alt='Arrow'
									onClick={() => {
										change.current.slickPrev();
									}}
								/>
								<img
									src={ArrowRight}
									alt='Arrow'
									onClick={() => {
										change.current.slickNext();
									}}
								/>
							</div>
						</div>
						<div className='explore-bodys'>
							<Slider ref={change} {...settings}>
								<div className='gallery-cont'>
									<Image cloudName='temfad' publicId={properties.first.image} />
								</div>
								<div className='gallery-cont'>
									<Image
										cloudName='temfad'
										publicId={properties.second.descriptionOnePic}
									/>
								</div>
								<div className='gallery-cont'>
									<Image
										cloudName='temfad'
										publicId={properties.third.descriptionTwoPic}
									/>
								</div>
								<div className='gallery-cont'>
									<Image
										cloudName='temfad'
										publicId={properties.fourth.descriptionThreePic}
									/>
								</div>
								<div className='gallery-cont'>
									<Image
										cloudName='temfad'
										publicId={properties.fifth.amenitiesPic}
									/>
								</div>
							</Slider>
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

export default Property;
