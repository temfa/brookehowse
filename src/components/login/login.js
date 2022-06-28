import React, { useState } from "react";
import Header from "../header/header";
import Container from "../styles/Container.styled";
import "./login.css";
import LoginImage from "../../assets/Login.png";
import FormStyled from "../styles/Form.Styled";
import Button from "../styles/Button.styled";
import { app } from "../../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { useEffect } from "react";
import Loader from "../loader/loader";

const Login = (props) => {
	let navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {}, [email, password]);
	const clearInputs = () => {
		setEmail("");
		setPassword("");
	};
	const handleAction = () => {
		setIsLoaded(true);
		const authentication = getAuth();
		if (props.name === "Login") {
			signInWithEmailAndPassword(authentication, email, password)
				.then((response) => {
					navigate("/catalog");
					sessionStorage.setItem(
						"Auth Token",
						response._tokenResponse.refreshToken
					);
					clearInputs();
					setIsLoaded(false);
				})
				.catch((error) => {
					console.log(error.code);
					if (error.code === "auth/wrong-password") {
						toast.error("Please check the Password");
						setIsLoaded(false);
					}
					if (error.code === "auth/user-not-found") {
						toast.error("Please check the Email");
						setIsLoaded(false);
					}
				});
		} else if (props.name === "Sign Up") {
			createUserWithEmailAndPassword(authentication, email, password)
				.then((response) => {
					navigate("/login");
					sessionStorage.setItem(
						"Auth Token",
						response._tokenResponse.refreshToken
					);
					clearInputs();
					setIsLoaded(false);
				})
				.catch((error) => {
					if (error.code === "auth/email-already-in-use") {
						toast.error("Email Already in Use");
						setIsLoaded(false);
					}
				});
		}
	};
	return (
		<div className='login-container'>
			<ToastContainer />
			<Container>
				<Header color='white' />
				<div className='login-cont'>
					<div className='login-img'>
						<img src={LoginImage} alt='loginimage' />
					</div>
					<div className='login-group'>
						<FormStyled fontSize='40px'>
							<h2>{props.title}</h2>
							<div className='form-group'>
								<input
									type='email'
									placeholder='Email'
									required
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								/>
							</div>
							<div className='form-group'>
								<input
									type='password'
									placeholder='Password'
									required
									value={password}
									onChange={(e) => {
										setPassword(e.target.value);
									}}
								/>
							</div>
							<Button
								type='submit'
								padding='25px 59px'
								bg='#1A1A1A'
								onClick={handleAction}>
								{isLoaded ? <Loader /> : props.name}
							</Button>
							<p>
								{props.text}
								<a href={props.link}>{props.to}</a>
							</p>
						</FormStyled>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Login;
