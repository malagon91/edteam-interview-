import styled from 'styled-components';

export const PostStyles = styled('section')`
	flex: 1;
	color: black;
`;

export const FormStyles = styled('div')`
	padding: 1em;
	font-size: 15px;
`;

export const RowFormStyles = styled('div')`
	display: flex;
`;
export const ColFormStyles = styled('div')`
	flex: 1;
	margin: 15px;
	display: block;
	float: left;
	padding-top: ${props => (props.title ? '33px' : '0')};
	label {
		margin-right: ${props => (props.post ? '21px' : '15px')};
	}
	input {
		width: ${props => (props.post ? '30%' : '80%')};
		font-size: 15px;
	}
	textarea {
		width: 100%;
		margin-top: 5px;
		font-size: 15px;
	}
`;
export const ButtonsContainer = styled('div')`
	flex: 1;
	text-align: center;
	margin-top: 20px;
`;

export const ButtonStyles = styled('button')`
	color: ${props => (props.type == 'save' ? '#21d84b' : '#f81e1e')};
	font-size: 1em;
	border-width: 2px;
	border-style: solid;
	border-color: ${props => (props.type == 'save' ? '#21d84b' : '#f81e1e')};
	border-image: initial;
	background: white;
	padding: 0.25em 1em;
	cursor: pointer;
	margin-left: 20px;
	width: 200px;
	height: 40px;
	&:focus {
		outline: none;
	}
	&:hover {
		background-color: ${props =>
			props.type == 'save' ? '#21d84b' : '#f81e1e'};
		color: white;
		border-color: white;
	}
`;
