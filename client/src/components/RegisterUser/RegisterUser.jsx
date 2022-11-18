import './RegisterUser.css';
import { Box, Image, Text } from '@chakra-ui/react';
import CruzRoja from '../../Images/CruzRoja.arg.png';
import Voluntarios from '../../Images/voluntarios.jpeg';
import { Footer } from '../../components/Footer';
import { NavBar } from '../../components/NavBar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { LoginUser } from '../LoginUser/LoginUser';

export const Register = () => {
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
	});

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
		alert('User created successfully');
		await axios.post('http://localhost:3002/api/register', {
			name: user.name,
			email: user.email,
			password: user.password,
		});
	};

	return (
		<>
			<Box display={'flex'}>
				<Link to='https://www.cruzroja.org.ar/cruz-roja-argentina/'>
					<Image
						justifyContent={'left'}
						src={CruzRoja}
						boxSize='100px'
					/>
				</Link>
				<NavBar />
			</Box>
			<div id='b'>
				<div>
					<div className='dis'>
						<div className='cont'>
							<form className='register-user'>
								<Text className='title'>
									Registro de Voluntarios
								</Text>
								<div className='icon'>
									<i className='fas fa-user-circle'></i>
								</div>
								<div className='formcontainer'>
									<div className='container'>
										<label className='lab'>
											<strong>Nombre</strong>
										</label>
										<input
											onChange={handleInputChange}
											className='in-reg'
											type='text'
											placeholder='Enter Name'
											name='name'
											required
										/>
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
										<strong>SIGN UP</strong>
									</button>
								</div>
							</form>
						</div>
						<LoginUser />
					</div>
				</div>
			</div>
		</>
	);
};
