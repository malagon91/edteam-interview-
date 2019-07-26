import React from 'react';
import { RowStyles } from './styles';
import { Column } from './Column';

export const Row = ({ children }) => (
	<RowStyles>
		<Column>United Kingdom</Column>
		<Column>Stonehenge, Windsor and Bath with Pub Lunch </Column>
		<Column>19 Sep, 1p.m.</Column>
		<Column>US$500</Column>
	</RowStyles>
);
