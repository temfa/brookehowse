import React from "react";
import styled from "styled-components";
import Sidebar from "../components/sidebar/sidebar";
import Profile from "../assets/Profile.png";

const SidebarContainer = styled.div`
	flex: 1;
	margin-left: 33%;
	background-color: #fffbf4;
	padding: 60px 120px 0px 60px;
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
		color: #1a1a1a1;
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
`;

const SidebarLayout = ({ children, ...props }) => {
	return (
		<div>
			<Sidebar />
			<SidebarContainer title='Catalog'>
				<div className='sidebar-body-header'>
					<h2>{props.title}</h2>
					<img src={Profile} alt='Profile' />
				</div>
				<div className='sidebar-body'>{children}</div>
			</SidebarContainer>
		</div>
	);
};

export default SidebarLayout;
