import React from 'react';
import { RowStyles } from './styles';
import { Column } from './Column';

export const Row = ({ headers, post }) => {
	return (
		<RowStyles>
			{headers.map((header, index) => (
				<Column key={index}>{post[header]}</Column>
			))}
		</RowStyles>
	);
};
