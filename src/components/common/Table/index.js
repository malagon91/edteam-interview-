import React from 'react';
import { TableStyles } from './styles';
import { TableHeader } from './Header';
import { Row } from './Row';

export const Table = () => (
	<TableStyles>
		<TableHeader />
		<Row />
	</TableStyles>
);
