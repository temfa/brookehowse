import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/Vector(4).png";
import Logo2 from "../../assets/Vector(5).png";
import Button from "../styles/Button.styled";
// import "./header.css";
import { db } from "../../utils/firebase-config";
import { ref, onValue } from "firebase/database";
import styled from "styled-components";

const Header = ({ color }) => {
	const HeaderStyle = styled.div`
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;

		.header-nav {
			display: flex;
			justify-content: space-between;
			width: 30%;
		}

		.header-logo img {
			width: 50%;
		}

		.header-nav a {
			color: ${({ color }) => color};
			font-size: 17px;
			font-weight: 300;
			font-family: "Roboto", sans-serif;
			line-height: 23px;
			text-decoration: none;
			transition: 1s all ease;
		}

		.header-nav a:hover {
			color: #bc9144;
			transform: scale(1.2);
		}

		.header-nav .active {
			font-weight: 900;
		}

		.active button {
			border: 1px solid #bc9144;
			background-color: #0b0728;
		}

		.nav-links-mobile {
			display: none;
		}
		.menu-icon {
			color: ${({ color }) => color};
			cursor: pointer;
			font-size: 30px;
			display: none;
		}

		.dropdown {
			position: relative;
		}

		.dropdown-menu {
			width: 200px;
			background-color: #bc9144;
			border-radius: 10px;
			position: absolute;
			top: 20px;
			left: 0px;
			z-index: 999;
		}

		.dropdown-menu a {
			display: block;
			padding: 19px 40px;
			color: white;
			font-size: 20px;
			font-weight: 300;
			font-family: "Roboto", sans-serif;
			line-height: 23px;
			text-decoration: none;
			transition: 1s all ease;
		}

		.dropdown-menu a:hover {
			color: white;
		}
		@media screen and (max-width: 1050px) {
			position: relative;

			.header-logo {
				display: flex;
				width: 100%;
				justify-content: space-between;
				align-items: center;
			}

			.header-nav {
				display: flex;
				flex-direction: column;
				width: 100%;
				position: absolute;
				top: 130px;
				left: -150%;
				opacity: 1;
				transition: all 2s ease-in-out;
				padding: 30px 0px;
			}

			.header-nav a {
				text-align: center;
				padding: 20px 0px;
				color: white;
			}

			.header-nav.actived {
				background: rgb(36, 34, 34);
				left: 0;
				opacity: 1;
				transition: all 1s ease-in-out;
				z-index: 1111111111;
				margin-left: 0px;
				width: 100%;
			}

			.dropdown {
				width: 100%;
				text-align: center;
				padding: 20px 0px;
			}

			.dropdown-menu {
				top: 40px;
			}

			.nav-links-mobile {
				display: block;
				margin-top: 20px;
			}

			.nav-links {
				display: none;
			}

			.menu-icon {
				display: block;
			}

			.dropdown-menu {
				width: 100%;
			}
		}
	`;
	const [click, setClick] = useState(false);
	const [dropdown, setDropdown] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	const [propertyData, setPropertyData] = useState("");
	const getPropertyDetail = () => {
		onValue(ref(db), (snapshot) => {
			const data = snapshot.val();
			if (data !== null) {
				setPropertyData(Object.values(data.newProperty));
			}
		});
	};
	const onMouseEnter = () => {
		if (window.innerWidth > 1500) {
			setDropdown(false);
		} else {
			setDropdown(true);
		}
	};

	const onMouseLeave = () => {
		if (window.innerWidth > 1500) {
			setDropdown(false);
		} else {
			setDropdown(false);
		}
	};
	useEffect(() => {
		getPropertyDetail();
	}, []);
	const locationUrl = useLocation();
	return (
		<HeaderStyle color={color}>
			<div className='header-logo'>
				{locationUrl.pathname === "/terms" ? (
					<img src={Logo2} alt='Logo' />
				) : locationUrl.pathname === "/privacy" ? (
					<img src={Logo2} alt='Logo' />
				) : (
					<img src={Logo} alt='Logo' />
				)}
				<div className='menu-icon' onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"} />
				</div>
			</div>
			<div className={click ? "header-nav actived" : "header-nav"}>
				<NavLink to='/' onClick={closeMobileMenu}>
					Home
				</NavLink>
				<NavLink to='/about' onClick={closeMobileMenu}>
					About
				</NavLink>
				{propertyData && (
					<div
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
						className='dropdown'>
						<NavLink to='#'>
							Properties <i className='fas fa-caret-down' />
						</NavLink>
						{dropdown && (
							<div className='dropdown-menu'>
								{propertyData.map((item, key) => {
									return (
										<NavLink
											to='/property'
											onClick={() => {
												window.localStorage.setItem(
													"Properties",
													JSON.stringify(item)
												);
												if (propertyData.length !== 1) {
													window.location.reload();
												}
											}}
											key={key}>
											{item.first.propertyName}
										</NavLink>
									);
								})}
							</div>
						)}
					</div>
				)}
				<NavLink
					to='/contact'
					className='nav-links-mobile'
					onClick={closeMobileMenu}>
					<Button padding='20px 65px' bg='#bc9144'>
						Contact
					</Button>
				</NavLink>
			</div>
			<NavLink to='/contact' className='nav-links'>
				<Button padding='23px 65px' bg='#bc9144'>
					Contact
				</Button>
			</NavLink>
		</HeaderStyle>
	);
};

export default Header;
