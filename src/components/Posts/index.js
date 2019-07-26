import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostStyles } from './styles';
import { Table } from '../common/Table';
import { getPosts } from '../../Actions/Posts';
import { Loading } from '../common/Loading';

export const Posts = () => {
	const dispatch = useDispatch();
	const { loading } = useSelector(({ App: { loading } }) => ({ loading }));

	useEffect(() => {
		dispatch(getPosts());
	}, []);
	console.log(loading);
	return (
		<PostStyles>
			<h3>POSTS</h3>
			{loading ? <Loading /> : <Table />}
		</PostStyles>
	);
};
