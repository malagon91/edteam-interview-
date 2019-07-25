import React from 'react';
import { HeaderStyles, ImgStyles } from './styles';
import logo from '../../imgs/logoEDteam.svg';
export const Header = () => (
	<HeaderStyles>
		<ImgStyles src={logo} />
		<h1>BIENVENIDOS A MI ENTREVISTA</h1>
	</HeaderStyles>
);
