import React, { useState } from 'react';
import './Form.scss';
import CruzRoja from '../Images/CruzRoja.arg.png';
import { Image, Box } from '@chakra-ui/react';
import axios from 'axios';
import { Footer } from './Footer';
import { NavBar } from './NavBar';

const Formulario = () => {
	const [datos, setDatos] = useState({
		fecha: '',
		ubicacion: '',
		evento: '',
		link: '',
		resumen: '',
	});
	const [errors, setErrors] = useState({});

	const handleInputChange = (event) => {
		// console.log(event.target.name)
		// console.log(event.target.value)
		setDatos({
			...datos,
			[event.target.name]: event.target.value,
		});
		setErrors(
			validate({
				...datos,
				[event.target.name]: event.target.value,
			})
		);
	};

	const enviarDatos = async (event) => {
		event.preventDefault();
		if (Object.values(errors).length > 0) {
			alert('Completar toda la información');
			return;
		}
		if (
			datos.fecha === '' &&
			datos.ubicacion === '' &&
			datos.evento === '' &&
			datos.link === ''
		) {
			alert('Completar información');
			return;
		}
		if (localStorage.token === null || localStorage.token === 'null') {
			alert('You need to be logged in');
			return;
		} else if (localStorage.token !== null) {
			alert('Evento registrado!');
			await axios.post('http://localhost:3002/api/add', {
				fecha: datos.fecha,
				ubicacion: datos.ubicacion,
				evento: datos.evento,
				link: datos.link,
				resumen: datos.resumen,
			});
		}
	};

	return (
		<>
			<Box display={'flex'}>
				<Image justifyContent={'left'} src={CruzRoja} boxSize='100px' />
				<NavBar />
			</Box>
			<div class='segment'>
				<h3>Registrar evento</h3>
			</div>
			<form>
				<label>
					<input
						id='in'
						onChange={handleInputChange}
						type='date'
						placeholder='fecha'
						name='fecha'
					/>
				</label>
				<label>
					<input
						id='in'
						onChange={handleInputChange}
						type='text'
						placeholder='ubicacion'
						name='ubicacion'
					/>
				</label>
				<label>
					<input
						id='in'
						onChange={handleInputChange}
						type='text'
						placeholder='evento'
						name='evento'
					/>
				</label>
				<label>
					<input
						id='in'
						onChange={handleInputChange}
						type='text'
						placeholder='link'
						name='link'
					/>
				</label>
				<label>
					<input
						id='in'
						className='res'
						onChange={handleInputChange}
						type='text'
						placeholder='resumen'
						name='resumen'
					/>
				</label>
				<div className='divbutt'>
					<button
						class='red'
						type='button'
						onClick={(event) => enviarDatos(event)}>
						Registrar
					</button>
				</div>
			</form>
			<Footer />
		</>
	);
};

export function validate(datos) {
	let error = {};
	if (!datos.fecha) {
		error.fehca = 'Indicar fecha del evento';
	}
	if (!datos.ubicacion) {
		error.ubicacion = 'Indicar ubicación del evento';
	}
	if (!datos.evento) {
		error.evento = 'Indicar tipo de evento';
	}
	if (!datos.link) {
		error.link = 'El evento debe tener fuente secundaria';
	}
	return error;
}

export default Formulario;
