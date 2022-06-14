import styled from "styled-components";

const PropertiesContainer = styled.div`
	display: flex;
	margin: 200px 0px 200px 120px;
	box-sizing: border-box;
	align-items: center;
	justify-content: space-between;

	.properties-text {
		width: 46%;
	}

	.properties-img {
		width: 50%;
	}

	p {
		font-size: 20px;
		font-weight: 400;
		font-family: "Roboto", sans-serif;
		color: #1e1e1e;
		line-height: 250%;
	}

	img {
		width: 100%;
		height: 100%;
	}

	span {
		font-weight: 700;
	}
`;

export default PropertiesContainer;
