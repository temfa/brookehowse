import React, { useEffect, useState } from "react";
import SidebarLayout from "../../layouts/sidebarLayout";
import "./new.css";
import FirstNew from "../../components/newdetails/firstNew";
import Button from "../../components/styles/Button.styled";
import SecondNew from "../../components/newdetails/secondNew";
import FifthNew from "../../components/newdetails/fifthNew";
import FourthNew from "../../components/newdetails/fourthNew";
import ThirdNew from "../../components/newdetails/thirdNew";
import { PropertiesContext } from "../../contect/PropertiesContext";
import { db } from "../../utils/firebase-config";
import { ref, set, update } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/loader/loader";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

const New = () => {
	window.scrollTo(0, 0);
	let navigate = useNavigate();
	useEffect(() => {
		let authToken = sessionStorage.getItem("Auth Token");

		if (!authToken) {
			navigate("/login");
		}
	});
	const [page, setPage] = useState(0);
	const [pagination, setPagination] = useState(1);
	const [submit, setSubmit] = useState(false);
	const [next, setNext] = useState(true);
	const [tempId, setTempId] = useState("");
	const [propertyName, setPropertyName] = useState("");
	const [price, setPrice] = useState("");
	const [location, setLocation] = useState("");
	const [number, setNumber] = useState("");
	const [descriptionOne, setDescritionOne] = useState("");
	const [descriptionTwo, setDescritionTwo] = useState("");
	const [descriptionThree, setDescritionThree] = useState("");
	const [uploadImage1, setUploadImage1] = useState("");
	const [uploadImage2, setUploadImage2] = useState("");
	const [uploadImage3, setUploadImage3] = useState("");
	const [uploadImage4, setUploadImage4] = useState("");
	const [uploadImage5, setUploadImage5] = useState("");
	const [isLoaded, setIsLoaded] = useState(false);
	const [uploadButton1, setUploadButton1] = useState(false);
	const [uploadButton2, setUploadButton2] = useState(false);
	const [uploadButton3, setUploadButton3] = useState(false);
	const [uploadButton4, setUploadButton4] = useState(false);
	const [uploadButton5, setUploadButton5] = useState(false);
	const [latestAmenitiesDetail, setLatestAmenitiesDetail] = useState([]);
	const editProperty = localStorage.getItem("editProperty");
	const editPropertyCont = JSON.parse(editProperty);
	const submitProperty = () => {
		setIsLoaded(true);
		const uuid = v4();
		if (editPropertyCont) {
			update(ref(db, `newProperty/ ${tempId}`), {
				first: {
					propertyName: propertyName,
					price: price,
					location: location,
					number: number,
					image: uploadImage1,
				},
				second: {
					descriptionOneText: descriptionOne,
					descriptionOnePic: uploadImage2,
				},
				third: {
					descriptionTwoText: descriptionTwo,
					descriptionTwoPic: uploadImage3,
				},
				fourth: {
					descriptionThreeText: descriptionThree,
					descriptionThreePic: uploadImage4,
				},
				fifth: {
					amenities: latestAmenitiesDetail,
					amenitiesPic: uploadImage5,
				},
				id: tempId,
			});
			localStorage.removeItem("Amenities");
			localStorage.removeItem("editProperty");
		} else {
			set(ref(db, `newProperty/ ${uuid}`), {
				first: {
					propertyName: propertyName,
					price: price,
					location: location,
					number: number,
					image: uploadImage1,
				},
				second: {
					descriptionOneText: descriptionOne,
					descriptionOnePic: uploadImage2,
				},
				third: {
					descriptionTwoText: descriptionTwo,
					descriptionTwoPic: uploadImage3,
				},
				fourth: {
					descriptionThreeText: descriptionThree,
					descriptionThreePic: uploadImage4,
				},
				fifth: {
					amenities: latestAmenitiesDetail,
					amenitiesPic: uploadImage5,
				},
				id: uuid,
			});
		}
		window.scrollTo(0, 0);
		toast.success("Uploaded Successfully!!!!");
		setIsLoaded(false);
		setPropertyName("");
		setPrice("");
		setLocation("");
		setNumber("");
		setTempId("");
		setDescritionOne("");
		setDescritionTwo("");
		setDescritionThree("");
		setUploadImage1("");
		setUploadImage2("");
		setUploadImage3("");
		setUploadImage4("");
		setUploadImage5("");
		window.localStorage.removeItem("Amenities");
		navigate("/catalog");
	};

	useEffect(() => {
		if (page === 4) {
			setNext(false);
			setSubmit(true);
		}
		if (page !== 4) {
			setNext(true);
			setSubmit(false);
		}
	}, [page]);
	useEffect(() => {
		if (editPropertyCont) {
			console.log(editPropertyCont);
			setPrice(editPropertyCont.first.price);
			setLocation(editPropertyCont.first.location);
			setPropertyName(editPropertyCont.first.propertyName);
			setUploadImage1(editPropertyCont.first.image);
			setNumber(editPropertyCont.first.number);
			setDescritionOne(editPropertyCont.second.descriptionOneText);
			setUploadImage2(editPropertyCont.second.descriptionOnePic);
			setDescritionTwo(editPropertyCont.third.descriptionTwoText);
			setUploadImage3(editPropertyCont.third.descriptionTwoPic);
			setDescritionThree(editPropertyCont.fourth.descriptionThreeText);
			setUploadImage4(editPropertyCont.fourth.descriptionThreePic);
			window.localStorage.setItem(
				"Amenities",
				JSON.stringify(editPropertyCont.fifth.amenities)
			);
			setUploadImage5(editPropertyCont.fifth.amenitiesPic);
			setTempId(editPropertyCont.id);
		}
	}, []);

	const nextAction = () => {
		if (page === 0) {
			if (propertyName === "") {
				setPage((curr) => curr);
				alert("Please fill in the Required Fields");
			} else if (price === "") {
				setPage((curr) => curr);
				alert("Please fill in the Required Fields");
			} else if (location === "") {
				setPage((curr) => curr);
				alert("Please fill in the Required Fields");
			} else {
				setPage((curr) => curr + 1);
				setPagination((curr) => curr + 1);
			}
		} else if (page === 1) {
			if (descriptionOne === "") {
				setPage((curr) => curr);
				alert("Please fill in the Required Description");
			} else {
				setPage((curr) => curr + 1);
				setPagination((curr) => curr + 1);
			}
		} else {
			setPage((curr) => curr + 1);
			setPagination((curr) => curr + 1);
		}
	};
	const pageDisplay = () => {
		if (page === 0) {
			return <FirstNew />;
		} else if (page === 1) {
			return <SecondNew />;
		} else if (page === 2) {
			return <ThirdNew />;
		} else if (page === 3) {
			return <FourthNew />;
		} else {
			return <FifthNew />;
		}
	};

	return (
		<SidebarLayout title='New Property Details'>
			<ToastContainer />
			<PropertiesContext.Provider
				value={{
					propertyName,
					setPropertyName,
					price,
					setPrice,
					location,
					setLocation,
					number,
					setNumber,
					descriptionOne,
					setDescritionOne,
					descriptionTwo,
					setDescritionTwo,
					descriptionThree,
					setDescritionThree,
					uploadImage1,
					setUploadImage1,
					uploadImage2,
					setUploadImage2,
					uploadImage3,
					setUploadImage3,
					uploadImage4,
					setUploadImage4,
					uploadImage5,
					setUploadImage5,
					uploadButton1,
					setUploadButton1,
					uploadButton2,
					setUploadButton2,
					uploadButton3,
					setUploadButton3,
					uploadButton4,
					setUploadButton4,
					uploadButton5,
					setUploadButton5,
					latestAmenitiesDetail,
					setLatestAmenitiesDetail,
				}}>
				{pageDisplay()}
				<div className='pagination'>
					<Button
						disabled={page === 0}
						padding='19px 33px'
						bg='#bc9144'
						onClick={() => {
							setPage((curr) => curr - 1);
							setPagination((curr) => curr - 1);
						}}>
						Previous
					</Button>
					<div className='pagination-numbers'>
						<ul>
							<li
								className={pagination === 1 ? "active" : ""}
								onClick={(e) => {
									setPage(parseInt(e.target.textContent) - 1);
									setPagination(parseInt(e.target.textContent));
								}}>
								1
							</li>
							<li
								className={pagination === 2 ? "active" : ""}
								onClick={(e) => {
									setPage(parseInt(e.target.textContent) - 1);
									setPagination(parseInt(e.target.textContent));
								}}>
								2
							</li>
							<li
								className={pagination === 3 ? "active" : ""}
								onClick={(e) => {
									setPage(parseInt(e.target.textContent) - 1);
									setPagination(parseInt(e.target.textContent));
								}}>
								3
							</li>
							<li
								className={pagination === 4 ? "active" : ""}
								onClick={(e) => {
									setPage(parseInt(e.target.textContent) - 1);
									setPagination(parseInt(e.target.textContent));
								}}>
								4
							</li>
							<li
								className={pagination === 5 ? "active" : ""}
								onClick={(e) => {
									setPage(parseInt(e.target.textContent) - 1);
									setPagination(parseInt(e.target.textContent));
								}}>
								5
							</li>
						</ul>
					</div>
					{next && (
						<Button
							disabled={page === 5}
							padding='19px 33px'
							bg='#bc9144'
							onClick={() => {
								nextAction();
							}}>
							Next
						</Button>
					)}
					{submit &&
						(isLoaded ? (
							<Loader />
						) : (
							<Button
								padding='19px 33px'
								bg='#bc9144'
								onClick={() => {
									submitProperty();
								}}>
								Submit
							</Button>
						))}
				</div>
				<div className='action-buttons'>
					<div className='next-btns'>
						{/* <Button
							disabled={page === 0}
							padding='19px 33px'
							bg='#bc9144'
							onClick={() => {
								setPage((curr) => curr - 1);
							}}>
							Previous
						</Button> */}
					</div>
				</div>
			</PropertiesContext.Provider>
		</SidebarLayout>
	);
};

export default New;
