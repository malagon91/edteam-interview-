import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PostStyles } from './styles';
import { Table } from '../common/Table';
import { getPosts } from '../../Actions/Posts';
import { Loading } from '../common/Loading';

export const Posts = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		console.log('init');
		dispatch(getPosts());
	}, []);

	return (
		<PostStyles>
			<h3>POSTS</h3>

			<Table />
			<Loading />
		</PostStyles>
	);
};
