import React from 'react';
import Skeleton from 'react-loading-skeleton';

/*
 * Componente generico para loading
 * return component
 *
 * */
export const Loading = () => (
	<>
		<Skeleton />
		<Skeleton count={5} />
	</>
);
