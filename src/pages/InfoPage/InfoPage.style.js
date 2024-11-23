import { css } from '@emotion/react';
import background from '@/assets/img/background.png';

export const backgroundStyle = css`
	background-image: url(${background});
	background-size: cover;
	background-position: center;
	width: 100%;
	height: 66.7rem;
`;

export const container = css`
	margin-top: 8.1rem;
	padding: 0 2.7rem;
`;

export const btnContainer = css`
	position: absolute;
	bottom: 3rem;
`;
