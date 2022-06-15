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
import ReactPaginate from "react-paginate";

const New = () => {
	const [page, setPage] = useState(0);
	const [next, setNext] = useState(true);
	const [submit, setSubmit] = useState(false);
	const [propertyName, setPropertyName] = useState("");
	const [price, setPrice] = useState("");
	const [location, setLocation] = useState("");
	const [descriptionOne, setDescritionOne] = useState("");
	const [descriptionTwo, setDescritionTwo] = useState("");
	const [descriptionThree, setDescritionThree] = useState("");
	useEffect(() => {
		if (page === 4) {
			setNext(false);
			setSubmit(true);
		}
	}, [page]);

	// const nextAction = () => {
	// 	if (page === 0) {
	// 		if (propertyName === "") {
	// 			setPage((curr) => curr);
	// 			alert("Please fill in the Required Fields");
	// 		} else if (price === "") {
	// 			setPage((curr) => curr);
	// 			alert("Please fill in the Required Fields");
	// 		} else if (location === "") {
	// 			setPage((curr) => curr);
	// 			alert("Please fill in the Required Fields");
	// 		} else {
	// 			setPage((curr) => curr + 1);
	// 		}
	// 	} else if (page === 1) {
	// 		if (descriptionOne === "") {
	// 			setPage((curr) => curr);
	// 			alert("Please fill in the Required Description");
	// 		} else {
	// 			setPage((curr) => curr + 1);
	// 		}
	// 	} else {
	// 		setPage((curr) => curr + 1);
	// 	}
	// };
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

	const changePage = ({ selected }) => {
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
				setPage(selected);
			}
		} else if (page === 1) {
			if (descriptionOne === "") {
				setPage((curr) => curr);
				alert("Please fill in the Required Description");
			} else {
				setPage(selected);
			}
		} else {
			setPage(selected);
		}
		if (page !== 1) {
			setNext(true);
			setSubmit(false);
		}
	};
	return (
		<SidebarLayout title='New Property Details'>
			<PropertiesContext.Provider
				value={{
					propertyName,
					setPropertyName,
					price,
					setPrice,
					location,
					setLocation,
					descriptionOne,
					setDescritionOne,
					descriptionTwo,
					setDescritionTwo,
					descriptionThree,
					setDescritionThree,
				}}>
				{pageDisplay()}
				<div className='action-buttons'>
					<div className='upload-btns'>
						<Button padding='19px 50px' bg='#bc9144'>
							Upload
						</Button>
					</div>
					<div className='next-btns'>
						<Button
							disabled={page === 0}
							padding='19px 33px'
							bg='#bc9144'
							onClick={() => {
								setPage((curr) => curr - 1);
							}}>
							Previous
						</Button>
						{next && (
							<Button
								disabled={page === 5}
								padding='19px 33px'
								bg='#bc9144'
								onClick={() => {
									// nextAction();
								}}>
								Next
							</Button>
						)}
						{submit && (
							<Button
								padding='19px 33px'
								bg='#bc9144'
								onClick={() => {
									alert("Form Submitted");
								}}>
								Submit
							</Button>
						)}
					</div>
				</div>
				<ReactPaginate
					previousLabel={"Previous"}
					nextLabel={"Next"}
					pageCount={5}
					onPageChange={changePage}
					containerClassName={"pagination-btns"}
					activeClassName={"paginationActive"}
				/>
			</PropertiesContext.Provider>
		</SidebarLayout>
	);
};

export default New;
