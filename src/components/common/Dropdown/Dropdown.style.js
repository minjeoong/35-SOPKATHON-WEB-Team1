import { theme } from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = css`
	display: flex;

	width: 100%;

	justify-content: space-between;
	align-items: center;

	gap: 4rem;

	padding: 1rem 1.5rem;

	border: 1.5px solid ${theme.colors.green};
	border-radius: 4rem;

	color: ${theme.colors.gray40};
	background-color: ${theme.colors.gray10};

	${theme.fonts.body2}
`;

export const itemList = css`
	position: absolute;

	top: 4.5rem;

	width: 32rem;
	max-height: 15.2rem;

	padding: 0.7rem 1.5rem;

	justify-content: space-between;

	border-radius: 8px;

	background-color: ${theme.colors.gray10};

	box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.1);
	overflow-y: scroll;
`;

export const item = css`
	display: block;

	padding: 0.7rem 0;

	border-bottom: 1px solid ${theme.colors.gray20};

	${theme.fonts.body2}
`;
