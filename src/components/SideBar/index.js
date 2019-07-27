import React from 'react';
import { useDispatch } from 'react-redux';
import { SideBarStyles, AnchorStyles } from './styles';
import { push } from 'connected-react-router';

/*
 * Componente de menu
 * return component
 *
 * */
export const SideBar = () => {
	const dispatch = useDispatch();
	const goTo = url => {
		dispatch(push(url));
	};

	return (
		<SideBarStyles>
			<h3>Mi Menu</h3>
			<AnchorStyles
				onClick={() => {
					goTo('/post');
				}}
			>
				→ Posts
			</AnchorStyles>
		</SideBarStyles>
	);
};
