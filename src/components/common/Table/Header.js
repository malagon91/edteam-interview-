import React from 'react';
import { TableHeaderStyles } from './styles';
import { RowHeader } from './RowHeader';
export const TableHeader = ({ headers }) => (
	<TableHeaderStyles>
		{headers.map((header, index) => (
			<RowHeader key={index}>{header}</RowHeader>
		))}
	</TableHeaderStyles>
);
