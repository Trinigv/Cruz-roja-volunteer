import './App.css';
import { Route, Routes } from 'react-router-dom';
import Matriz from './components/Matriz';
import Form from './components/Form';
import { Register } from './components/RegisterUser/RegisterUser';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Landing from './components/Landing/Landing';
import { Footer } from './components/Footer';

function App() {
	return (
		<ChakraProvider>
			<Routes>
				<Route exact path='/' element={<Landing />} />
				<Route exact path='/display' element={<Matriz />} />
				<Route exact path='/form' element={<Form />} />
				<Route exact path='/register' element={<Register />} />
			</Routes>
			<Footer />
		</ChakraProvider>
	);
}

export default App;
