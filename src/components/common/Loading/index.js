import React from 'react';
import Skeleton from 'react-loading-skeleton';

export const Loading = () => (
	<>
		<Skeleton />
		<Skeleton count={5} />
	</>
);
