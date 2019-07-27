import React from 'react';
import { ContentStyles } from './styles';
import { Routes } from '../../Routes';
import { SideBar } from '../SideBar';

/*
 * Componente de la parte central de la app
 * return component
 *
 * */
export const Content = ({ children }) => (
	<ContentStyles>
		<SideBar />
		<Routes />
	</ContentStyles>
);
