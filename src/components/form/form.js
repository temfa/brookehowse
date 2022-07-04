import React, { useRef, useState } from "react";
import Button from "../styles/Button.styled";
import FormStyled from "../styles/Form.Styled";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../loader/loader";

const Form = (props) => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const mailform = useRef();
	const [loader, setLoader] = useState(false);

	const mailAction = (e) => {
		e.preventDefault();
		setLoader(true);
		emailjs
			.sendForm(
				"service_xdoq4zx",
				"template_kcvcl7q",
				mailform.current,
				"CF5KGa-9bxQqAUVbZ"
			)
			.then(
				() => {
					setLoader(false);
					toast.success("Message Sent Successfully");
					setName("");
					setEmail("");
					setPhone("");
				},
				(error) => {
					setLoader(false);
					toast.error(error.text);
				}
			);
	};
	return (
		<FormStyled fontSize={props.size}>
			<h2>{props.title}</h2>
			<form ref={mailform} onSubmit={mailAction}>
				<div className='form-group'>
					<input
						type='email'
						placeholder='Email'
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						name='email'
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Full Name'
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
						name='name'
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='text'
						placeholder='Phone'
						value={phone}
						onChange={(e) => {
							setPhone(e.target.value);
						}}
						name='phone'
						required
					/>
				</div>
				{loader ? (
					<Loader />
				) : (
					<Button padding='25px 59px' bg='#bc9144' type='submit'>
						Send
					</Button>
				)}
			</form>
		</FormStyled>
	);
};

export default Form;
