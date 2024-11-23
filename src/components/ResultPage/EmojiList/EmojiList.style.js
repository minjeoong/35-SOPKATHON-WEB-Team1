import { theme } from '@/styles/theme';
import { css } from '@emotion/react';

export const List = css`
	display: flex;
	justify-content: center;

	gap: 1.6rem;
`;

export const ListItem = (isSelected) => css`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 4.6rem;
	height: 4.6rem;
	border-radius: 50%;
	background-color: ${isSelected ? theme.colors.gray30 : theme.colors.gray20};
	transition: background-color 0.2s ease;
	cursor: pointer;
`;
