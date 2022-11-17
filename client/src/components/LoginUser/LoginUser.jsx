import './LoginUser.css';
import { Box, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const LoginUser = () => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const navigate = useNavigate();

	const handleInputChange = (event) => {
		// console.log(event.target.name)
		// console.log(event.target.value)
		setUser({
			...user,
			[event.target.name]: event.target.value,
		});
	};

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		const logged_user = await axios.post(
			'http://localhost:3002/api/login',
			{
				email: user.email,
				password: user.password,
			}
		);
		if (logged_user.data.token) {
			localStorage.setItem('token', logged_user.data.token);
			console.log(localStorage);
			navigate('/form');
			alert('Correctly logged in');
		} else {
			alert('Email or password incorrect');
		}
	};

	return (
		<>
			<div>
				<div>
					<form className='register-user'>
						<Text className='title'>Ingresar</Text>
						<div className='icon'>
							<i className='fas fa-user-circle'></i>
						</div>
						<div className='formcontainer'>
							<div className='container'>
								<label className='lab'>
									<strong>E-mail</strong>
								</label>
								<input
									onChange={handleInputChange}
									className='in-reg'
									type='text'
									placeholder='Enter E-mail'
									name='email'
									required
								/>
								<label className='lab'>
									<strong>Contraseña</strong>
								</label>
								<input
									onChange={handleInputChange}
									className='in-reg'
									type='password'
									placeholder='Enter Password'
									name='password'
									required
								/>
							</div>
							<button
								className='sign-up'
								type='submit'
								onClick={(e) => handleOnSubmit(e)}>
								<strong>LOG IN</strong>
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};
