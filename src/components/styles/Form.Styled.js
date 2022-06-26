import styled from "styled-components";

const FormStyled = styled.div`
	h2 {
		font-family: "Arsenica";
		font-size: ${({ fontSize }) => fontSize};
		font-weight: 400;
		line-height: 113%;
		color: white;
		margin-bottom: 40px;
	}

	.form-group {
		margin-bottom: 20px;
		width: 100%;
	}

	.form-group input {
		border: none;
		background-color: #fff;
		padding: 24px 200px 24px 40px;
		width: 100%;
		box-sizing: border-box;
		outline: none;
	}

	@media screen and (max-width: 650px) {
		width: 90%;
		margin: 0px auto;

		.form-group input {
			padding: 24px 20px 24px 40px;
		}
	}

	@media screen and (max-width: 370px) {
		h2 {
			font-size: 45px;
		}
	}

	@media screen and (max-width: 300px) {
		h2 {
			font-size: 35px;
		}
	}
`;
export default FormStyled;
