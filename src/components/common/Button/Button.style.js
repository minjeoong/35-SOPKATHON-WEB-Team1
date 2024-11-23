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

		feedback: css`
			display: flex;

			padding: 0.7rem 3.5rem;
			justify-content: center;
			align-items: center;
			gap: 1rem;
			flex-shrink: 0;

			border-radius: 22px;
			border: 2px solid ${theme.colors.gray20};
			background: ${theme.colors.gray10};
			color: ${theme.colors.gray50};
		`,
		submit: css`
			display: flex;
			padding: 0.7rem 3.5rem;
			justify-content: center;
			align-items: center;
			gap: 1rem;
			border-radius: 22px;
			background: ${theme.colors.green};
			color: ${theme.colors.white};
		`,
		togoHome: css`
			display: flex;
			width: 321px;
			height: 50px;
			padding: 12px 74px 12px 75px;
			justify-content: center;
			align-items: center;
			flex-shrink: 0;

			border-radius: 40px;
			border: 2px solid ${theme.colors.green};
			background: ${theme.colors.gray10};

			gap: 0.4rem;
		`,
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
		small: css`
			width: 14.7rem;
			height: 3.4rem;
			${theme.fonts.body2}
		`,
	};

	return style[size];
};
