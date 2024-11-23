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
		font-size: 22px;
		font-style: normal;
		font-weight: 800;
		line-height: 24px; /* 109.091% */
	`,
	head2: css`
		font-family: 'Apple SD Gothic Neo';
		font-size: 20px;
		font-style: normal;
		font-weight: 800;
		line-height: 24px; /* 120% */
	`,
	title1: css`
		font-family: 'Apple SD Gothic Neo';
		font-size: 24px;
		font-style: normal;
		font-weight: 800;
		line-height: 26px; /* 108.333% */
	`,
	body1: css`
		font-family: 'Apple SD Gothic Neo';
		font-size: 16px;
		font-style: normal;
		font-weight: 500;
		line-height: 20px; /* 125% */
	`,
	caption1: css`
		font-family: 'Apple SD Gothic Neo';
		font-size: 12px;
		font-style: normal;
		font-weight: 500;
		line-height: 20px; /* 166.667% */
	`,
};

export const theme = { colors, fonts };
