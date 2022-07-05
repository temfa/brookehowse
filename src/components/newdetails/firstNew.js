import React, { useContext, useEffect, useState } from "react";
import { PropertiesContext } from "../../contect/PropertiesContext";
import Button from "../styles/Button.styled";
import axios from "axios";
import Loader from "../loader/loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Image } from "cloudinary-react";

const FirstNew = () => {
	const [uploadImage, setUploadImage] = useState("");
	const [isLoaded, setIsLoaded] = useState(false);
	const {
		propertyName,
		setPropertyName,
		price,
		setPrice,
		location,
		setLocation,
		number,
		setNumber,
		uploadImage1,
		setUploadImage1,
		uploadButton1,
		setUploadButton1,
	} = useContext(PropertiesContext);
	const formData = new FormData();
	formData.append("file", uploadImage);
	formData.append("upload_preset", "brookehowse");

	useEffect(() => {}, [uploadImage, propertyName, price, location]);
	useEffect(() => {}, [propertyName]);
	useEffect(() => {
		if (uploadButton1 === true && uploadImage1 === "") {
			setUploadButton1(false);
		}
	}, []);

	const editProperty = localStorage.getItem("editProperty");
	const editPropertyCont = JSON.parse(editProperty);

	return (
		<>
			<ToastContainer />
			<p className='details'>
				Please provide required details <span>- Section 1</span>
			</p>
			<div className='new-body'>
				<div>
					{uploadImage1 ? (
						<div className='new-body-img'>
							<Image cloudName='brookehowse' publicId={uploadImage1} />
						</div>
					) : (
						uploadImage && (
							<div className='new-body-img'>
								<img src={URL.createObjectURL(uploadImage)} alt='house' />
							</div>
						)
					)}

					<label className='new-label'>
						<input
							type='file'
							onChange={(e) => {
								if (editPropertyCont) {
									setUploadImage1("");
									setUploadImage(e.target.files[0]);
									setUploadButton1(true);
								} else {
									setUploadImage(e.target.files[0]);
									setUploadButton1(true);
								}
							}}
						/>
						Change Image
					</label>
					<div className='upload-btns'>
						{uploadButton1 &&
							(isLoaded ? (
								<Loader />
							) : (
								<Button
									padding='19px 50px'
									bg='#bc9144'
									onClick={async () => {
										setIsLoaded(true);
										try {
											const response = await axios.post(
												"https://api.cloudinary.com/v1_1/brookehowse/upload",
												formData
											);
											setUploadImage1(response.data.secure_url);
											window.scrollTo(0, 0);
											toast.success("Photo Updated Successfully!!!!");
											setIsLoaded(false);
											setUploadButton1(false);
										} catch (error) {
											toast.error(error.message);
											setIsLoaded(false);
											setUploadButton1(true);
										}
									}}>
									Upload
								</Button>
							))}
					</div>
				</div>
				<div className='new-form'>
					<div className='new-form-group'>
						<input
							type='text'
							placeholder='Property Specification'
							required
							value={propertyName}
							onChange={(e) => {
								setPropertyName(e.target.value);
								console.log(propertyName);
							}}
						/>
					</div>
					<div className='new-form-group'>
						<input
							type='text'
							placeholder='Price'
							required
							value={price}
							onChange={(e) => {
								setPrice(e.target.value);
							}}
						/>
					</div>
					<div className='new-form-group'>
						<input
							type='text'
							placeholder='Location'
							required
							value={location}
							onChange={(e) => {
								setLocation(e.target.value);
							}}
						/>
					</div>
					<div className='new-form-group'>
						<input
							type='text'
							placeholder='No of Available Slot'
							required
							value={number}
							onChange={(e) => {
								setNumber(e.target.value);
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default FirstNew;
