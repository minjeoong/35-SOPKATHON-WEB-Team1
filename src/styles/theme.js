import { css } from '@emotion/react';

const colors = {
	black: '#161616',
	white: '#ffffff',

	// gray scale
	gray50: '#43494F',
	gray40: '#626971',
	gray30: '#c1c7cf',
	gray20: '#e0e3e5',
	gray10: '#eff1f2',

	// key color
	lime10: '#b0ff1a',
	green: '#18dc10',
	blue: '#3b79fe',
	orange: '#ff9122',
	yellow: '#fde816',
	red: '#fa4336',
};

const fonts = {
	head1: css`
		font-family: 'Apple SD Gothic Neo';
		font-size: 2.2rem;
		font-style: normal;
		font-weight: 800;
		line-height: 2.4rem; /* 109.091% */
	`,
	head2: css`
		font-family: 'Apple SD Gothic Neo';
		font-size: 2rem;
		font-style: normal;
		font-weight: 800;
		line-height: 2.4rem; /* 120% */
	`,
	title1: css`
		font-family: 'Apple SD Gothic Neo';
		font-size: 2.4rem;
		font-style: normal;
		font-weight: 800;
		line-height: 2.6rem; /* 108.333% */
	`,
	title2: css`
		font-family: 'Apple SD Gothic Neo';
		font-size: 2rem;
		font-style: normal;
		font-weight: 800;
		line-height: 2.6rem;
	`,
	title3: css`
		font-family: 'Apple SD Gothic Neo';
		font-size: 1.6rem;
		font-style: normal;
		font-weight: 600;
		line-height: 2.6rem;
	`,
	title3: css`
		font-family: 'Apple SD Gothic Neo';
		font-size: 16px;
		font-style: normal;
		font-weight: 600;
		line-height: 26px; /* 162.5% */
	`,
	body1: css`
		font-family: 'Apple SD Gothic Neo';
		font-size: 1.6rem;
		font-style: normal;
		font-weight: 500;
		line-height: 2rem; /* 125% */
	`,
	body2: css`
		font-family: 'Apple SD Gothic Neo';
		font-size: 1.4rem;
		font-style: normal;
		font-weight: 400;
		line-height: 2rem; /* 125% */
	`,
	body3: css`
		font-family: 'Apple SD Gothic Neo';
		font-size: 1.2rem;
		font-style: normal;
		font-weight: 400;
		line-height: 2rem; /* 125% */
	`,
	caption1: css`
		font-family: 'Apple SD Gothic Neo';
		font-size: 1.2rem;
		font-style: normal;
		font-weight: 500;
		line-height: 2rem; /* 166.667% */
	`,
};

export const theme = { colors, fonts };
