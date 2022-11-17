import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
	const navigate = useNavigate();

	const handleLogOut = (e) => {
		e.preventDefault();
		localStorage.setItem('token', null);
		alert('Logged Out successfully');
		console.log(localStorage);
		navigate('/register');
	};

	return (
		<div className='nav'>
			{localStorage.token === 'null' ? (
				<ul>
					<Link to='/display'>
						<li>Matriz</li>
					</Link>
					<Link to='/form'>
						<li>Registrar Evento</li>
					</Link>
					<Link to='/register'>
						<li>Acceder</li>
					</Link>
				</ul>
			) : (
				<ul>
					<Link to='/display'>
						<li>Matriz</li>
					</Link>
					<Link to='/form'>
						<li>Registrar Evento</li>
					</Link>
					<Link>
						<li onClick={(e) => handleLogOut(e)}>Log Out</li>
					</Link>
				</ul>
			)}
		</div>
	);
};
