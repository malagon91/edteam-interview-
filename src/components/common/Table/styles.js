import styled from 'styled-components';

export const TableStyles = styled('div')`
	box-sizing: border-box;

	display: block;
	margin: 2em auto;
	width: 90%;
	max-width: 600px;
`;

export const TableHeaderStyles = styled('div')`
	box-sizing: border-box;
	display: flex;
	flex-flow: row wrap;
	border-left: solid 1px #d9d9d9;
	transition: 0.5s;
	border-top: solid 1px #1565c0;
	border-left: solid 1px #1565c0;
`;

export const RowHeaderStyles = styled('div')`
	box-sizing: border-box;
	background: #1976d2;
	color: white;
	border-color: #1565c0;
	width: calc(100% / 4);
	text-align: center;
	padding: 0.5em 0.5em;
	border-right: solid 1px #d9d9d9;
	border-bottom: solid 1px #d9d9d9;
	@media screen and (min-width: 767px) {
		border-bottom: solid 1px;
		width: calc(100% / 4);
	}
	@media screen and (max-width: 430px) {
		border-bottom: 0;
		width: 100%;
	}
`;

export const RowStyles = styled('div')`
	box-sizing: border-box;
	box-sizing: border-box;
	display: flex;
	flex-flow: row wrap;
	border-left: solid 1px #d9d9d9;
	transition: 0.5s;
	&:hover {
		background: #f5f5f5;
		transition: 500ms;
	}
`;
export const ColumnStyles = styled('div')`
	box-sizing: border-box;
	width: calc(100% / 4);
	text-align: center;
	padding: 0.5em 0.5em;
	border-right: solid 1px #d9d9d9;
	border-bottom: solid 1px #d9d9d9;
	@media screen and (min-width: 767px) {
		width: calc(100% / 4);
	}
	@media screen and (max-width: 430px) {
		border-bottom: 0;
		width: 100%;
	}
`;
