import React from "react";
import Button from "../../components/styles/Button.styled";
import SidebarLayout from "../../layouts/sidebarLayout";
import "./catalog.css";
import House from "../../assets/HN 2 1.png";

const Catalog = () => {
	return (
		<SidebarLayout title='Catalog'>
			<div className='catalog'>
				<input type='text' placeholder='Search' />
				<Button bg='#BC9144' padding='17px 58px'>
					Filter
				</Button>
			</div>
			<div className='catalog-img'>
				<img src={House} alt='house' />
				<img src={House} alt='house' />
			</div>
		</SidebarLayout>
	);
};

export default Catalog;
