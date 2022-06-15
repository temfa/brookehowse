import React, { useContext } from "react";
import House from "../../assets/HN 2 1.png";
import { PropertiesContext } from "../../contect/PropertiesContext";

const ThirdNew = () => {
	const { descriptionTwo, setDescritionTwo } = useContext(PropertiesContext);
	return (
		<>
			<p className='details'>
				Please provide required details <span>- Section 3</span>
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
							value={descriptionTwo}
							onChange={(e) => {
								setDescritionTwo(e.target.value);
							}}></textarea>
					</div>
				</div>
			</div>
		</>
	);
};

export default ThirdNew;
