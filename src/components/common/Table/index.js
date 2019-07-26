import React from 'react';
import { TableStyles } from './styles';
import { TableHeader } from './Header';
import { Row } from './Row';
import { Loading } from '../Loading';

export const Table = ({ data }) => {
	const getHeaders = index => Object.keys(data[index]);

	return data.length > 0 ? (
		<TableStyles>
			<TableHeader headers={getHeaders(0)} />
			{data.map((post, index) => (
				<Row key={index} headers={getHeaders(index)} post={post} />
			))}
		</TableStyles>
	) : (
		<Loading />
	);
};
