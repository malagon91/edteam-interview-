import styled from 'styled-components';

export const SideBarStyles = styled('aside')`
	flex: 0 1 300px;
	border: 1px solid #000;
	color: black;
`;

export const AnchorStyles = styled('a')`
	display: block;
	margin-left: 10px;
	margin-bottom: 20px;
	color: #00cbff;
	font-weight: bold;
	cursor: pointer;
	&:hover {
		box-shadow: 5px 5px 5px rgba(0, 255, 0, 0.1);
	}
`;
