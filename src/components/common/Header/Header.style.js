import { css } from '@emotion/react';
import { theme } from '@/styles/theme';

export const headerStyle = css`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 3.7rem;
	width: 100%;
`;

export const iconStyle = css`
	position: absolute;
	width: 2rem;
	height: 2rem;
	left: 1rem;
	cursor: pointer;
`;

export const titleStyle = css`
	${theme.fonts.head2};
	text-align: center;
`;
