import { css } from '@emotion/react';

export const button = css`
	display: flex;

	justify-content: center;
	align-items: center;

	border-radius: 8px;

	white-space: nowrap;

	cursor: pointer;

	transition: all 0.2s ease-in;
`;

export const variant = (variant) => {
	const style = {
		primary: css``,

		secondary: css``,
	};

	return style[variant];
};

export const size = (size) => {
	const style = {
		large: css``,
		medium: css``,
		small: css``,
	};

	return style[size];
};
