import { css } from '@emotion/react';
import { theme } from '@/styles/theme.js';

export const MainWrap = css`
	background: linear-gradient(180deg, #8fff79 0%, #eff1f2 100%);
	width: 100%;
	height: 100vh;
`;

export const ButtonWrap = css`
	text-align: center;
	position: absolute;
	bottom: 0;
	margin: 3rem 2.7rem;
`;

export const Title = css`
	padding-top: 5.7rem;
	text-align: center;
	font-family: 'JunebugStompNF', sans-serif;
	font-size: 45px;
	font-style: normal;
	font-weight: 800;
	line-height: normal;
`;
export const SubTitle = css`
	padding: 1.9rem 0;
	${theme.fonts.body1}
	color: 	${theme.colors.gray50};
	text-align: center;
	width: 100%;
`;
