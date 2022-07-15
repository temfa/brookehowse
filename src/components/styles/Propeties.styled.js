import styled from "styled-components";

const PropertiesContainer = styled.div`
	display: flex;
	margin: 200px 0px 100px 120px;
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

	@media screen and (max-width: 1000px) {
		flex-direction: column-reverse;
		margin: 50px;

		.properties-text,
		.properties-img {
			width: 100%;
		}
	}

	@media screen and (max-width: 500px) {
		margin: 20px;
	}
`;

export default PropertiesContainer;
