import styled from "styled-components";

const ValueStyle = styled.div`
	width: ${({ width }) => width};
	background-color: ${({ bg }) => bg};
	height: 103px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-itmes: center;

	p {
		font-size: 15px;
		font-weight: 400;
		font-family: "Roboto", sans-serif;
		color: white;
		line-height: 120%;
		margin: auto;
	}

	@media screen and (max-width: 600px) {
		width: 100%;
		margin-top: 10px;
	}
`;

export default ValueStyle;
