import styled from "styled-components";

const AboutStyle = styled.div`
	width: 81%;
	margin: 0px auto;
	display: flex;
	justify-content: space-between;
	padding: ${({ padding }) => padding};
	align-items: center;

	@media screen and (max-width: 900px) {
		width: 90%;
	}

	@media screen and (max-width: 700px) {
		flex-direction: column;
		padding: 20px 0px;
	}
`;

export default AboutStyle;
