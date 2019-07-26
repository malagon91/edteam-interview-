import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostStyles } from './styles';
import { Table } from '../common/Table';
import { getPosts } from '../../Actions/Posts';
import { Loading } from '../common/Loading';
import { Waypoint } from 'react-waypoint';
import { Add } from '../common/Add';

export const Posts = () => {
	const [items, setItems] = useState(10);
	const dispatch = useDispatch();
	const { loading, posts } = useSelector(selector);

	const loadMore = () => {
		setItems(items + 10);
	};

	const loadPost = () =>
		posts
			.slice(0, items)
			.map(({ id, name, title, body }) => ({ id, user: name, title, body }));

	const newPost = () => {};

	useEffect(() => {
		dispatch(getPosts());
	}, []);

	return (
		<PostStyles>
			<h3>POSTS</h3>
			{loading ? <Loading /> : <Table data={loadPost()} />}
			<Add title={'Agregar Post'} disabled={false} onClick={newPost} />
			<Waypoint onLeave={loadMore} />
		</PostStyles>
	);
};

const selector = ({ App: { loading, posts } }) => ({
	loading,
	posts
});
