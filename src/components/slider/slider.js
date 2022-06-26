import { useState, useEffect } from "react";
import "./slider.css";
import ArrowLeft from "../../assets/Vector(10).png";
import ArrowRight from "../../assets/Vector(11).png";
import Button from "../styles/Button.styled";

const Slider = (props) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const slideLength = props.sliderData.length;

	const autoScroll = true;
	let slideInterval;
	let intervalTime = 15000;

	const nextSlide = () => {
		setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
	};

	const prevSlide = () => {
		setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
	};

	function auto() {
		slideInterval = setInterval(nextSlide, intervalTime);
	}

	useEffect(() => {
		setCurrentSlide(0);
	}, []);

	useEffect(() => {
		if (autoScroll) {
			auto();
		}
		return () => clearInterval(slideInterval);
	}, [currentSlide]);

	return (
		<div className='slider'>
			<img src={ArrowLeft} alt='arrow' onClick={prevSlide} className='left' />
			<img src={ArrowRight} alt='arrow' onClick={nextSlide} className='right' />
			{props.sliderData.map((slide, index) => {
				return (
					<div
						className={index === currentSlide ? "slide current" : "slide"}
						key={index}>
						{index === currentSlide && (
							<div className='slide-container'>
								<img src={slide.image} alt='slide' className='image' />
								<div className='content'>
									<h2>{slide.heading}</h2>
									<p>{slide.desc}</p>
									<Button padding='20px 20px' bg='#bc9144'>
										Learn More
									</Button>
								</div>
							</div>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default Slider;
