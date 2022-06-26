import React, { useContext, useState, useEffect } from "react";
import { PropertiesContext } from "../../contect/PropertiesContext";
import Button from "../styles/Button.styled";
import axios from "axios";
import Loader from "../loader/loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Image } from "cloudinary-react";

const FifthNew = () => {
	const [uploadImage, setUploadImage] = useState("");
	const [isLoaded, setIsLoaded] = useState(false);
	const amenitiesDetails = localStorage.getItem("Amenities");
	const [amenities, setAmenities] = useState("");
	const [amenitiesDetail, setAmenitiesDetail] = useState(() => {
		if (amenitiesDetails === "undefined") {
			return [];
		} else if (amenitiesDetails === null) {
			return [];
		} else {
			return JSON.parse(amenitiesDetails);
		}
	});
	const {
		setUploadImage5,
		uploadButton5,
		uploadImage5,
		setUploadButton5,
		setLatestAmenitiesDetail,
	} = useContext(PropertiesContext);

	const formData = new FormData();
	formData.append("file", uploadImage);
	formData.append("upload_preset", "brookehowse");
	const editProperty = localStorage.getItem("editProperty");
	const editPropertyCont = JSON.parse(editProperty);
	useEffect(() => {
		if (uploadButton5 === true && uploadImage5 === "") {
			setUploadButton5(false);
		}
	}, []);
	return (
		<>
			<ToastContainer />
			<p className='details'>
				Please provide required details <span>- Section 5</span>
			</p>
			<div className='new-body'>
				<div>
					{uploadImage5 ? (
						<div className='new-body-img'>
							<Image cloudName='temfad' publicId={uploadImage5} />
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
									setUploadImage5("");
									setUploadImage(e.target.files[0]);
									setUploadButton5(true);
								} else {
									setUploadImage(e.target.files[0]);
									setUploadButton5(true);
								}
							}}
						/>
						Change Image
					</label>
					<div className='upload-btns'>
						{uploadButton5 &&
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
												"https://api.cloudinary.com/v1_1/temfad/upload",
												formData
											);
											setUploadImage5(response.data.secure_url);
											window.scrollTo(0, 0);
											toast.success("Photo Updated Successfully!!!!");
											setIsLoaded(false);
											setUploadButton5(false);
										} catch (error) {
											toast.error(error.message);
											setIsLoaded(false);
											setUploadButton5(true);
										}
									}}>
									Upload
								</Button>
							))}
					</div>
				</div>
				<div className='new-amenities'>
					<p>
						Amenities <span>(max of 6)</span>
					</p>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							if (amenitiesDetail === null) {
								setAmenitiesDetail(amenitiesDetail);
							} else if (amenitiesDetail.length === 6) {
								alert("You cannot add more than six amenities");
								setAmenities("");
							} else {
								let tempAmenitiesDetails = [...amenitiesDetail, amenities];
								setAmenitiesDetail(tempAmenitiesDetails);
								window.localStorage.setItem(
									"Amenities",
									JSON.stringify(tempAmenitiesDetails)
								);
								setAmenities("");
								setLatestAmenitiesDetail(tempAmenitiesDetails);
							}
						}}>
						<input
							type='text'
							value={amenities}
							onChange={(e) => {
								setAmenities(e.target.value);
							}}
						/>
					</form>
					<div className='amenities-detail'>
						{amenitiesDetail?.map((el, key, index) => {
							return (
								<div
									key={key}
									onClick={() => {
										let temp = amenitiesDetail.splice(key, 1);
										window.localStorage.setItem(
											"Amenities",
											JSON.stringify(temp)
										);
										setLatestAmenitiesDetail(temp);
									}}>
									<p>{el}</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default FifthNew;
