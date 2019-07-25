import React from 'react';
import { HomeStyles } from './styles';
import { SideBar } from './sideBar';
import { Posts } from './posts';

export const Home = () => (
	<HomeStyles>
		<SideBar />
		<Posts />
	</HomeStyles>
);
