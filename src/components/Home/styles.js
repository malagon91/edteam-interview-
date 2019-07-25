import styled from 'styled-components';

export const HomeStyles = styled.div`
	margin: auto;
	max-width: 1200px;
	@media screen and (min-width: 640px) {
		display: flex;
	}
`;

export const SideBarStyles = styled.aside`
	flex: 0 1 300px;
	border: 1px solid #000;
	color: black;
`;

export const PostStyles = styled.section`
	flex: 1;
	background: #129a22;
`;
