import React from "react";
import styled from "styled-components";
import Sidebar from "../components/sidebar/sidebar";
import Profile from "../assets/Profile.png";

const SidebarContainer = styled.div`
	flex: 1;
	background-color: #fffbf4;
	padding: 60px 120px 555px 60px;
	position: relative;

	.sidebar-body-header {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.sidebar-body-header h2 {
		font-family: "Arsenica";
		font-size: 36px;
		font-weight: 400;
		color: #1a1a1a;
	}

	.sidebar-body {
		background-color: white;
		position: absolute;
		top: 150px;
		left: -100px;
		padding: 50px 50px 0px 50px;
		width: 90%;
		height: 400px;
		overflow: scroll;
		border: 1px solid rgba(188, 145, 68, 0.3);
		box-shadow: 25px 30px 86px rgba(188, 145, 68, 0.15);
	}

	@media screen and (max-width: 1000px) {
		padding: 60px 0px;
		box-sizing: border-box;

		.sidebar-cont {
			width: 90%;
			margin: 0px auto;
		}

		.sidebar-body {
			position: unset;
			width: 100%;
			margin-top: 20px;
			padding: 50px 20px;
			box-sizing: border-box;
		}
	}
	@media screen and (max-width: 690px) {
		.sidebar-body-header h2 {
			font-size: 26px;
		}
	}
	@media screen and (max-width: 470px) {
		.sidebar-body-header h2 {
			font-size: 20px;
		}
	}
`;

const SidebarLayout = ({ children, ...props }) => {
	return (
		<div className='big-container'>
			<Sidebar />
			<SidebarContainer title='Catalog'>
				<div className='sidebar-cont'>
					<div className='sidebar-body-header'>
						<h2>{props.title}</h2>
						<img src={Profile} alt='Profile' />
					</div>
					<div className='sidebar-body'>{children}</div>
				</div>
			</SidebarContainer>
		</div>
	);
};

export default SidebarLayout;
