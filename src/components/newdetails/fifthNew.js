import React, { useState } from "react";
import House from "../../assets/HN 2 1.png";

const FifthNew = () => {
	const amenitiesDetails = localStorage.getItem("Amenities");
	const [amenities, setAmenities] = useState("");
	const [amenitiesDetail, setAmenitiesDetail] = useState(
		JSON.parse(amenitiesDetails)
	);
	return (
		<>
			<p className='details'>
				Please provide required details <span>- Section 5</span>
			</p>
			<div className='new-body'>
				<div className='new-body-img'>
					<img src={House} alt='house' />
					{/* <input type='file' name='' id='' /> */}
				</div>
				<div className='new-amenities'>
					<p>
						Amenities <span>(max of 6)</span>
					</p>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							if (amenitiesDetail.length === 6) {
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
						{amenitiesDetail?.map((el) => {
							return (
								<div>
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
