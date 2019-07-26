import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostStyles } from './styles';
import { Table } from '../common/Table';
import { getPosts } from '../../Actions/Posts';
import { Loading } from '../common/Loading';
import { Waypoint } from 'react-waypoint';

export const Posts = () => {
	const [items, setItems] = useState(10);
	const dispatch = useDispatch();
	const { loading, posts } = useSelector(selector);

	const loadMore = () => {
		console.log('scroll');
		setItems(items + 10);
	};

	const loadPost = () => posts.slice(0, items);

	useEffect(() => {
		dispatch(getPosts());
	}, []);

	return (
		<PostStyles>
			<h3>POSTS</h3>
			{loading ? <Loading /> : <Table data={loadPost()} />}
			<Waypoint onLeave={loadMore} />
		</PostStyles>
	);
};

const selector = ({ App: { loading, posts } }) => ({
	loading,
	posts
});
