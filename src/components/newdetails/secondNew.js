import React, { useContext, useState, useEffect } from "react";
import { PropertiesContext } from "../../contect/PropertiesContext";
import Button from "../styles/Button.styled";
import axios from "axios";
import Loader from "../loader/loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Image } from "cloudinary-react";

const SecondNew = () => {
	const [uploadImage, setUploadImage] = useState();
	const [isLoaded, setIsLoaded] = useState(false);
	const {
		descriptionOne,
		setDescritionOne,
		setUploadImage2,
		uploadButton2,
		uploadImage2,
		setUploadButton2,
	} = useContext(PropertiesContext);

	const formData = new FormData();
	formData.append("file", uploadImage);
	formData.append("upload_preset", "brookehowse");
	const editProperty = localStorage.getItem("editProperty");
	const editPropertyCont = JSON.parse(editProperty);
	useEffect(() => {
		if (uploadButton2 === true && uploadImage2 === "") {
			setUploadButton2(false);
		}
	}, []);
	return (
		<>
			<ToastContainer />
			<p className='details'>
				Please provide required details <span>- Section 2</span>
			</p>
			<div className='new-body'>
				<div>
					{uploadImage2 ? (
						<div className='new-body-img'>
							<Image cloudName='temfad' publicId={uploadImage2} />
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
									setUploadImage2("");
									setUploadImage(e.target.files[0]);
									setUploadButton2(true);
								} else {
									setUploadImage(e.target.files[0]);
									setUploadButton2(true);
								}
							}}
						/>
						Change Image
					</label>
					<div className='upload-btns'>
						{uploadButton2 &&
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
											setUploadImage2(response.data.secure_url);
											window.scrollTo(0, 0);
											toast.success("Photo Updated Successfully!!!!");
											setIsLoaded(false);
											setUploadButton2(false);
										} catch (error) {
											toast.error(error.message);
											setIsLoaded(false);
											setUploadButton2(true);
										}
									}}>
									Upload
								</Button>
							))}
					</div>
				</div>
				<div className='new-form'>
					<div className='new-form-group'>
						<textarea
							name=''
							id=''
							placeholder='First Description'
							value={descriptionOne}
							onChange={(e) => {
								setDescritionOne(e.target.value);
							}}></textarea>
					</div>
				</div>
			</div>
		</>
	);
};

export default SecondNew;
