import React, { useContext, useState } from "react";
import { PropertiesContext } from "../../contect/PropertiesContext";

const FirstNew = () => {
	const [uploadImage, setUploadImage] = useState("");
	const {
		propertyName,
		setPropertyName,
		price,
		setPrice,
		location,
		setLocation,
	} = useContext(PropertiesContext);

	return (
		<>
			<p className='details'>
				Please provide required details <span>- Section 1</span>
			</p>
			<div className='new-body'>
				<div className='new-body-img'>
					{uploadImage && (
						<img src={URL.createObjectURL(uploadImage)} alt='house' />
					)}
					<label>
						<input
							type='file'
							onChange={(e) => {
								setUploadImage(e.target.files[0]);
								console.log(uploadImage);
							}}
						/>
						Change Image
					</label>
					{/* <input type='file' name='' id='' /> */}
				</div>
				<div className='new-form'>
					<div className='new-form-group'>
						<input
							type='text'
							placeholder='Property Name'
							required
							value={propertyName}
							onChange={(e) => {
								setPropertyName(e.target.value);
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
				</div>
			</div>
		</>
	);
};

export default FirstNew;
