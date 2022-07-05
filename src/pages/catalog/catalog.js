import React, { useState, useEffect } from "react";
import SidebarLayout from "../../layouts/sidebarLayout";
import "./catalog.css";
import { db } from "../../utils/firebase-config";
import { ref, onValue, remove } from "firebase/database";
import { Image } from "cloudinary-react";
import Loader from "../../components/loader/loader";
import { useNavigate } from "react-router-dom";
import Edit from "../../assets/edit.png";
import Delete from "../../assets/delete.png";
import Location from "../../assets/Group.png";
import Button from "../../components/styles/Button.styled";

const Catalog = () => {
	let navigate = useNavigate();
	const [propertyData, setPropertyData] = useState("");
	const [tempPropertyData, setTempPropertyData] = useState({});
	const [popup, setPopup] = useState(false);
	const [isLoaded, setIsLoaded] = useState(true);
	const [searchValue, setSearchValue] = useState("");
	const [test, setTest] = useState(false);
	const getPropertyDetail = () => {
		onValue(ref(db), (snapshot) => {
			const data = snapshot.val();
			if (data !== null) {
				setPropertyData(Object.values(data.newProperty));

				setIsLoaded(false);
			} else if (data == null) {
				setPropertyData([]);
				setIsLoaded(false);
				setTest(true);
			}
		});
	};
	useEffect(() => {
		let authToken = sessionStorage.getItem("Auth Token");

		if (!authToken) {
			navigate("/login");
		}
	});
	useEffect(() => {
		getPropertyDetail();
	}, []);

	window.scrollTo(0, 0);
	return (
		<SidebarLayout title='Catalog'>
			<div className='catalog'>
				<input
					type='text'
					placeholder='Search with Property Name'
					value={searchValue}
					onChange={(e) => {
						setSearchValue(e.target.value);
					}}
				/>
			</div>
			<div className='catalog-container'>
				{isLoaded ? (
					<Loader />
				) : test ? (
					<h1 className='error-msg'>There is no Property to show</h1>
				) : (
					propertyData
						?.filter((item) => {
							if (searchValue === "") {
								return item;
							} else if (
								item.first.propertyName
									.toLowerCase()
									.includes(searchValue.toLowerCase())
							) {
								return item;
							}
						})
						?.map((items, key) => {
							return (
								<div className='catalog-img' key={key}>
									<Image
										cloudName='brookehowse'
										publicId={items.first.image}
										className='pictures'
									/>
									<div className='action-cont'>
										<div className='action-text'>
											<h2>{items.first.propertyName}</h2>
											<div className='action-location'>
												<img src={Location} alt='Map' />
												<p>{items.first.location}</p>
											</div>
										</div>
										<div className='action-img'>
											<div>
												<img
													src={Edit}
													alt='edit'
													onClick={() => {
														navigate("/new");
														window.localStorage.setItem(
															"editProperty",
															JSON.stringify(items)
														);
													}}
												/>
											</div>
											<div>
												<img
													src={Delete}
													alt='edit'
													onClick={() => {
														setPopup(!popup);
														setTempPropertyData(items);
													}}
												/>
											</div>
										</div>
									</div>
								</div>
							);
						})
				)}
				{popup && (
					<div className='popup center'>
						<p>Are you sure you want to delete the property?</p>
						<div className='popup-buttons'>
							<Button
								bg='#000000'
								padding='19px 75px'
								onClick={() => {
									remove(ref(db, `newProperty/ ${tempPropertyData.id}`));
									setPopup(false);
								}}>
								Yes
							</Button>
							<Button
								bg='#ff0000'
								padding='19px 75px'
								onClick={() => {
									setPopup(false);
								}}>
								No
							</Button>
						</div>
					</div>
				)}
			</div>
		</SidebarLayout>
	);
};

export default Catalog;
