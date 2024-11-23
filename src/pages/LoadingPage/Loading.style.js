import bg_img from '@/assets/img/loading_bg.png';
import { theme } from '@/styles/theme';
import { css } from '@emotion/react';

export const wrapper = css`
	background-image: url(${bg_img});
	background-size: contain;
	background-repeat: no-repeat;

	width: 37.5rem;
	height: 66.7rem;
`;

export const slider = css`
	.slick-track {
		display: flex;

		gap: 1rem;
	}

	.slick-slide {
		width: 19rem !important;
	}
`;

export const noticeLayout = css`
	display: flex;

	flex-direction: column;
	justify-content: center;

	padding: 4.2rem 0 2.8rem 0;

	gap: 0.8rem;

	text-align: center;
`;

export const description = css`
	color: ${theme.colors.gray50};
	${theme.fonts.body2}
`;

export const wait = css`
	color: ${theme.colors.gray50};

	${theme.fonts.title1}
`;
