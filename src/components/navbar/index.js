import React from 'react';
import './navbar.css';

import { Link } from 'react-router-dom';
import { Navbar, Icon } from 'react-materialize';


export default (props) => {
	return (	
		<Navbar brand={<Link to='/'><i className="fab fa-react logo"></i></Link>}
						alignLinks="right"
						menuIcon={<Icon>dehaze</Icon>}
						className={props.bgColor}>
			<Link to='/'>Главная</Link>
			<Link to='/portfolio'>Портфолио</Link>
			<Link to='/about'>Обо мне</Link>
		</Navbar>
		);
}