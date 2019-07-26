import React from 'react';
import { MyInfoStyles, LinkEmail } from './styles';

export const MyInfo = () => (
	<MyInfoStyles>
		<h2>Miguel Malagon</h2>
		<h2>
			<LinkEmail
				target="_blank"
				href="https://github.com/malagon91/edteam-interview-"
			>
				https://github.com/malagon91
			</LinkEmail>
		</h2>
	</MyInfoStyles>
);
