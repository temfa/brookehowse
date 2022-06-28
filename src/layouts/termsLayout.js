import React from "react";
import styled from "styled-components";
import Container from "../components/styles/Container.styled";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Whatsapp from "../assets/Group 445.png";

const TermsStyled = styled.div`
	padding: 40px 0px;

	.terms-header {
		margin: 100px 0px 50px 0px;
		width: 100%;
		text-align: center;
	}

	.terms-header h2 {
		width: 40%;
		font-size: 55px;
		font-weight: 400;
		color: #000000;
		font-family: "ArsenicaBold";
		margin: 0px auto;
	}

	.terms-details {
		border-bottom: 2px solid #e0d9cd;
	}

	.terms-details h2 {
		font-size: 36px;
		font-family: "ArsenicaBold";
		font-weight: 600;
		margin: 64px 0px 14px;
		text-transform: capitalize;
	}

	.terms-details p {
		font-family: "Roboto", sans-serif;
		font-size: 17px;
		font-weight: 400;
		color: #1e1e1e;
		line-height: 202%;
		margin-top: 30px;
	}

	.terms-details p:first-child {
		margin-top: 0px;
	}

	.terms-details p:last-child {
		margin-bottom: 50px;
	}

	@media screen and (max-width: 1387px) {
		.terms-header h2 {
			width: 50%;
		}
	}

	@media screen and (max-width: 1122px) {
		.terms-header h2 {
			width: 55%;
		}
	}

	@media screen and (max-width: 1024px) {
		.terms-header h2 {
			width: 60%;
		}
	}

	@media screen and (max-width: 807px) {
		.terms-header h2 {
			width: 65%;
		}
	}

	@media screen and (max-width: 747px) {
		.terms-header h2 {
			width: 70%;
		}
	}

	@media screen and (max-width: 698px) {
		.terms-header h2 {
			width: 75%;
		}
	}

	@media screen and (max-width: 654px) {
		.terms-header h2 {
			width: 90%;
		}
	}

	@media screen and (max-width: 555px) {
		.terms-header h2 {
			width: 100%;
			font-size: 45px;
		}
	}

	@media screen and (max-width: 419px) {
		.terms-details h2 {
			font-size: 30px;
		}
	}

	@media screen and (max-width: 336px) {
		.terms-details h2 {
			font-size: 27px;
		}
	}
`;

const TermsLayout = ({ children, title }) => {
	window.scrollTo(0, 0);
	return (
		<TermsStyled>
			<Container>
				<Header color='black' />
			</Container>
			<Container>
				<div className='terms-header'>
					<h2>{title}</h2>
				</div>
			</Container>
			<Container>{children}</Container>
			<div className='whatsapp'>
				<a href='https://wa.me/+2348188434844' target='_blank' rel='noreferrer'>
					<img src={Whatsapp} alt='whatsapp' />
				</a>
			</div>
			<Footer />
		</TermsStyled>
	);
};

export default TermsLayout;
