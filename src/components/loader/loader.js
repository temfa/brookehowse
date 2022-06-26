import React from "react";
import { ThreeDots } from "react-loader-spinner";
import LoaderStyle from "../styles/LoaderStyle";

const Loader = () => {
	return (
		<LoaderStyle>
			<ThreeDots color='#bc9144' height='100' width='100' />
		</LoaderStyle>
	);
};

export default Loader;
