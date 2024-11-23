import { css, keyframes } from '@emotion/react';
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

export const CharWrap = css`
	position: relative;
	width: 100%;
	height: 32rem;
	margin-top: 1rem;
`;

const sway1 = keyframes`
  0%, 100% {
    transform: rotate(0); /* 기본 위치 */
  }
  50% {
    transform: rotate(30deg); /* 오른쪽으로 이동 */
  }
`;

const sway2 = keyframes`
  0%, 100% {
    transform: rotate(0); /* 기본 위치 */
  }
  50% {
    transform: rotate(-30deg); /* 오른쪽으로 이동 */
  }
`;

//초록색
export const Char1 = css`
	position: absolute;
	bottom: 5rem;
	right: 0;
	width: 151.234px;
	height: 147.996px;
	animation: ${sway1} 2s infinite ease-in-out; /* 3초 반복 */
`;

// 주황색
export const Char2 = css`
	position: absolute;
	bottom: 1rem;
	left: 31%;
	width: 115.426px;
	height: 105px;
	animation: ${sway2} 2s infinite ease-in-out; /* 3초 반복 */
`;

export const Char3 = css`
	position: absolute;
	bottom: 2.4rem;
	left: 2.7rem;

	width: 86px;
	height: 82.384px;
	animation: ${sway1} 2s infinite ease-in-out; /* 3초 반복 */
`;

//빨간색
export const Char4 = css`
	position: absolute;
	top: 1rem;
	left: 36%;
	width: 160px;
	height: 153px;
	animation: ${sway2} 2s infinite ease-in-out; /* 3초 반복 */
`;

//파란
export const Char5 = css`
	position: absolute;
	top: 9rem;
	left: 1rem;
	width: 130px;
	height: 128px;
	animation: ${sway2} 2s infinite ease-in-out; /* 3초 반복 */
`;
