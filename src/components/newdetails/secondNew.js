import React, { useContext } from "react";
import House from "../../assets/HN 2 1.png";
import { PropertiesContext } from "../../contect/PropertiesContext";

const SecondNew = () => {
	const { descriptionOne, setDescritionOne } = useContext(PropertiesContext);
	return (
		<>
			<p className='details'>
				Please provide required details <span>- Section 2</span>
			</p>
			<div className='new-body'>
				<div className='new-body-img'>
					<img src={House} alt='house' />
					{/* <input type='file' name='' id='' /> */}
				</div>
				<div className='new-form'>
					<div className='new-form-group'>
						<textarea
							name=''
							id=''
							placeholder='Description'
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
