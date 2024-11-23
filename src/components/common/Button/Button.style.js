import { css } from '@emotion/react';
import { theme } from '@/styles/theme.js';

export const button = css`
	display: flex;

	justify-content: center;
	align-items: center;

	border-radius: 8px;

	white-space: nowrap;

	cursor: pointer;

	transition: all 0.2s ease-in;
`;

export const variant = (variant, isDisabled) => {
	const style = {
		primary: css`
			display: flex;
			padding: 0.9rem 14.2rem;
			justify-content: center;
			align-items: center;
			gap: 1rem;
			flex-shrink: 0;
			border-radius: 40px;
			background: ${isDisabled ? theme.colors.gray30 : theme.colors.green};
			color: ${isDisabled ? theme.colors.gray40 : theme.colors.black};
		`,

		secondary: css``,
	};

	return style[variant];
};

export const size = (size) => {
	const style = {
		large: css`
			width: 32.1rem;
			height: 5rem;
			${theme.fonts.title2}
		`,
		medium: css``,
		small: css``,
	};

	return style[size];
};
