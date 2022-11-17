import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Matriz from './components/Matriz';
import Form from './components/Form';
import { Register } from './components/RegisterUser/RegisterUser';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
	return (
		<ChakraProvider>
			<Routes>
				<Route exact path='/display' element={<Matriz />} />
				<Route exact path='/form' element={<Form />} />
				<Route exact path='/register' element={<Register />} />
			</Routes>
		</ChakraProvider>
	);
}

export default App;
