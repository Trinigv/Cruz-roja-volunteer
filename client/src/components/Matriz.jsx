import React, { useState, useEffect } from 'react';
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
	Box,
	Text,
	Image,
} from '@chakra-ui/react';
import { Footer } from './Footer';
import CruzRoja from '../Images/CruzRoja.arg.png';
import { NavBar } from './NavBar';
import { Link, NavLink } from 'react-router-dom';

export default function Matriz() {
	const [mongoData, setMongoData] = useState('');

	useEffect(() => {
		fetch('http://localhost:3002/api/display')
			.then((res) => res.json())
			.then((mongoData) => setMongoData(mongoData));
	}, []);

	return (
		<>
			<Box display={'flex'}>
				<Image justifyContent={'left'} src={CruzRoja} boxSize='100px' />

				<NavBar />
			</Box>
			<Box
				display={'flex'}
				justifyContent={'center'}
				paddingBottom={'5%'}
				paddingLeft={'5%'}>
				<Text fontSize='4xl'>Matriz de Seguimiento</Text>
			</Box>
			<Box paddingBottom={'2%'}>
				<TableContainer>
					<Table variant='striped' colorScheme='red'>
						<Thead>
							<Tr>
								<Th>Fecha</Th>
								<Th>Ubicación</Th>
								<Th>Evento</Th>
								<Th>Link</Th>
								<Th>Resumen</Th>
								<Th>Status</Th>
							</Tr>
						</Thead>
						<Tbody>
							{mongoData &&
								mongoData.map((el) => (
									<Tr>
										<Td>{el.fecha}</Td>
										<Td>{el.ubicacion}</Td>
										<Td>{el.evento}</Td>
										<Td>{el.link}</Td>
										<Td>{el.resumen}</Td>
										<Td>{el.status}</Td>
									</Tr>
								))}
						</Tbody>
					</Table>
				</TableContainer>
			</Box>
			<Footer />
		</>
	);
}
