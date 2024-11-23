import { theme } from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = (mainCardImageUrl) => css`
	display: flex;

	flex-direction: column;

	width: 31.2rem;
	height: 44rem;

	margin: 0 auto;

	border-radius: 3rem;

	gap: 0.4rem;

	padding: 21.2rem 1.7rem 2.2rem 1.7rem;
	margin-top: 3.3rem;
	margin-bottom: 5.5rem;

	background-image: url(${mainCardImageUrl});
	background-size: cover;
	background-repeat: no-repeat;
`;

export const date = css`
	${theme.fonts.body3}
`;

export const title = css`
	padding-bottom: 1.1rem;

	${theme.fonts.head2}
`;

export const cardTitle = css`
	padding-bottom: 0.3rem;
	${theme.fonts.head0}
`;

export const cardContent = css`
	${theme.fonts.body3}

	white-space: normal;
	word-wrap: break-word;
	max-height: 10rem;

	overflow-y: scroll;
`;
