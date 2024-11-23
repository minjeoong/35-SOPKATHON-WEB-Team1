import { theme } from '@/styles/theme';
import { css } from '@emotion/react';

export const cardContainer = css`
	display: flex;
	flex-direction: column;
	padding: 1.7rem 4.3rem 5.8rem 4.4rem;
`;

export const emogiContainer = css`
	display: flex;
	text-align: center;
	flex-direction: column;
	gap: 1.9rem;
	align-items: center;
	padding: 5.7rem 0;
`;

export const bottomButton = css`
	position: fixed;
	display: flex;

	bottom: 0rem;
	left: 50%;
	transform: translate(-50%, 0);
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.8rem;
	padding: 2rem 0;

	background-color: ${theme.colors.gray10};
`;
