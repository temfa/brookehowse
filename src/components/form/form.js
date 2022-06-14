import React from "react";
import Button from "../styles/Button.styled";
import FormStyled from "../styles/Form.Styled";

const Form = (props) => {
	return (
		<FormStyled fontSize={props.size}>
			<h2>{props.title}</h2>
			<form>
				<div className='form-group'>
					<input type='email' placeholder='Email' />
				</div>
				<div className='form-group'>
					<input type='text' placeholder='Full Name' />
				</div>
				<div className='form-group'>
					<input type='text' placeholder='Phone' />
				</div>
				<Button padding='25px 59px' bg='#bc9144'>
					Send
				</Button>
			</form>
		</FormStyled>
	);
};

export default Form;
