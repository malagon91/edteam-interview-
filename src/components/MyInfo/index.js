import React from 'react';
import { MyInfoStyles, LinkEmail } from './styles';

/*
 * MyInfo
 * return component
 *
 * */
export const MyInfo = () => (
	<MyInfoStyles>
		<h2>Miguel Malagon</h2>
		<h2>
			<LinkEmail
				target="_blank"
				href="https://github.com/malagon91/edteam-interview-"
			>
				Revisa mi codigo en Github ;)
			</LinkEmail>
		</h2>
	</MyInfoStyles>
);
