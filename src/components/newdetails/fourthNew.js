import React, { useContext, useState } from "react";
import { PropertiesContext } from "../../contect/PropertiesContext";
import Button from "../styles/Button.styled";
import axios from "axios";
import Loader from "../loader/loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Image } from "cloudinary-react";
import { useEffect } from "react";

const FourthNew = () => {
	const [uploadImage, setUploadImage] = useState("");
	const [isLoaded, setIsLoaded] = useState(false);
	const {
		descriptionThree,
		setDescritionThree,
		setUploadImage4,
		uploadImage4,
		uploadButton4,
		setUploadButton4,
	} = useContext(PropertiesContext);

	useEffect(() => {
		if (uploadButton4 === true && uploadImage4 === "") {
			setUploadButton4(false);
		}
	}, []);

	const formData = new FormData();
	formData.append("file", uploadImage);
	formData.append("upload_preset", "brookehowse");
	const editProperty = localStorage.getItem("editProperty");
	const editPropertyCont = JSON.parse(editProperty);
	return (
		<>
			<ToastContainer />
			<p className='details'>
				Please provide required details <span>- Section 4</span>
			</p>
			<div className='new-body'>
				<div>
					{uploadImage4 ? (
						<div className='new-body-img'>
							<Image cloudName='brookehowse' publicId={uploadImage4} />
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
									setUploadImage4("");
									setUploadImage(e.target.files[0]);
									setUploadButton4(true);
								} else {
									setUploadImage(e.target.files[0]);
									setUploadButton4(true);
								}
							}}
						/>
						Change Image
					</label>
					<div className='upload-btns'>
						{uploadButton4 &&
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
											setUploadImage4(response.data.secure_url);
											window.scrollTo(0, 0);
											toast.success("Photo Updated Successfully!!!!");
											setIsLoaded(false);
											setUploadButton4(false);
										} catch (error) {
											toast.error(error.message);
											setIsLoaded(false);
											setUploadButton4(true);
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
							placeholder='Third Description'
							value={descriptionThree}
							onChange={(e) => {
								setDescritionThree(e.target.value);
							}}></textarea>
					</div>
				</div>
			</div>
		</>
	);
};

export default FourthNew;
