import React from 'react';
import { ContentStyles } from './styles';
import { Routes } from '../../Routes';
import { SideBar } from '../SideBar';

export const Content = ({ children }) => (
	<ContentStyles>
		<SideBar />
		<Routes />
	</ContentStyles>
);
