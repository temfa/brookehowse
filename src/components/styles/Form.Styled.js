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
	}

	.form-group input {
		border: none;
		background-color: #fff;
		padding: 24px 200px 24px 40px;
		width: 100%;
		box-sizing: border-box;
		outline: none;
	}
`;
export default FormStyled;
