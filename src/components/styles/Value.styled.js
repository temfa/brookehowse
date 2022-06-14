import styled from "styled-components";

const ValueStyle = styled.div`
	width: ${({ width }) => width};
	background-color: ${({ bg }) => bg};
	padding: ${({ padding }) => padding};
	text-align: center;

	p {
		font-size: 15px;
		font-weight: 400;
		font-family: "Roboto", sans-serif;
		color: white;
		line-height: 120%;
	}
`;

export default ValueStyle;
