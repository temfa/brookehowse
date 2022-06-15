import styled from "styled-components";

const Button = styled.button`
	background-color: ${({ bg }) => bg};
	border: none;
	transition: all 1s ease;
	color: white;
	font-size: 20px;
	font-weight: 400;
	padding: ${({ padding }) => padding};
	cursor: pointer;

	&:hover {
		color: #bc9144;
		background-color: white;
		transform: scale(1.1);
	}
`;

export default Button;