import React, { useState } from "react";
import Header from "../../components/header/header";
import Container from "../../components/styles/Container.styled";
import "./login.css";
import LoginImage from "../../assets/Login.png";
import FormStyled from "../../components/styles/Form.Styled";
import Button from "../../components/styles/Button.styled";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const loginAction = (e) => {
		e.preventDefault();
		console.log(password);
		console.log(username);
	};
	return (
		<div className='login-container'>
			<Container>
				<Header />
				<div className='login-cont'>
					<div className='login-img'>
						<img src={LoginImage} alt='loginimage' />
					</div>
					<div className='login-group'>
						<FormStyled fontSize='40px'>
							<h2>Sign in to your account</h2>
							<form onSubmit={loginAction}>
								<div className='form-group'>
									<input
										type='email'
										placeholder='Email'
										required
										value={username}
										onChange={(e) => {
											setUsername(e.target.value);
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
								<Button type='submit' padding='25px 59px' bg='#1A1A1A'>
									Login
								</Button>
							</form>
						</FormStyled>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Login;
