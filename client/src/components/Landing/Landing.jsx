import './Landing.css';
import { Text, Box, Image, Button } from '@chakra-ui/react';
import { NavBar } from '../NavBar';
import CruzRoja from '../../Images/CruzRoja.arg.png';
import { Footer } from '../Footer';
import { Link } from 'react-router-dom';

export default function Landing() {
	return (
		<div>
			<Box display={'flex'}>
				<Image justifyContent={'left'} src={CruzRoja} boxSize='100px' />
				<NavBar />
			</Box>
			<body className='bg'>
				<div className='total'>
					<div>
						<Text className='text'>
							SIEMPRE PRESENTES
							<br />
							VOLUNTARIOS
						</Text>
					</div>
				</div>
				<div className='acc'>
					<Link to='/register'>
						<Button classname='but' size='lg'>
							Acceder
						</Button>
					</Link>
				</div>
			</body>
			<Footer />
		</div>
	);
}
