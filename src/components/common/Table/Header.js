import React from 'react';
import { TableHeaderStyles } from './styles';
import { RowHeader } from './RowHeader';
export const TableHeader = () => (
	<TableHeaderStyles>
		<RowHeader>Country</RowHeader>
		<RowHeader>Events</RowHeader>
		<RowHeader>Time</RowHeader>
		<RowHeader>Fees</RowHeader>
	</TableHeaderStyles>
);
