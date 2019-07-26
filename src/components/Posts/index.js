import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostStyles } from './styles';
import { Table } from '../common/Table';
import { getPosts } from '../../Actions/Posts';
import { Loading } from '../common/Loading';
import { Waypoint } from 'react-waypoint';

export const Posts = () => {
	const dispatch = useDispatch();
	const { loading, posts } = useSelector(selector);

	useEffect(() => {
		dispatch(getPosts());
	}, []);

	return (
		<PostStyles>
			<h3>POSTS</h3>
			{loading ? <Loading /> : <Table data={posts} />}
		</PostStyles>
	);
};

const selector = ({ App: { loading, posts } }) => ({
	loading,
	posts
});
