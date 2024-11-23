import { theme } from '@/styles/theme';
import { css } from '@emotion/react';

const sharedInputStyles = css`
	display: flex;
	align-items: center;
	width: 100%;
	height: 4rem;
	border-radius: 40px;
	transition: background 0.3s ease;
	color: ${theme.colors.gray50};

	&::placeholder {
		color: ${theme.colors.gray30};
	}
`;

const sharedBtnStyles = css`
	display: flex;
	align-items: center;
	gap: 0.6rem;
	padding: 1rem;
	height: 100%;
	border-top-left-radius: 40px;
	border-bottom-left-radius: 40px;
	transition:
		background 0.3s ease,
		color 0.3s ease;
	cursor: pointer;

	span {
		width: 2.5rem;
		${theme.fonts.body2}
	}
`;

const sharedBtnInputStyles = css`
	flex: 1;
	height: 100%;
	padding-left: 1rem;
	border-top-right-radius: 40px;
	border-bottom-right-radius: 40px;
	background: ${theme.colors.gray20};
	color: ${theme.colors.gray50};
	transition: background 0.3s ease;

	&::placeholder {
		color: ${theme.colors.gray30};
	}

	&:not(:placeholder-shown) {
		border: 1.5px solid ${theme.colors.green};
		border-left: none;
		background: ${theme.colors.gray10};
	}
`;

export const input = css`
	${sharedInputStyles}
	padding: 1rem 1.5rem;
	background: ${theme.colors.gray20};

	&:not(:placeholder-shown) {
		border: 1px solid ${theme.colors.green};
		background: ${theme.colors.gray10};
		transition: background 0.3s ease;
	}
`;

export const inputPlus = css`
	${sharedInputStyles}

	button {
		${sharedBtnStyles}
		background: ${theme.colors.green};
		color: ${theme.colors.white};
	}

	input {
		${sharedBtnInputStyles}
		&:not(:placeholder-shown) {
			border: 1.5px solid ${theme.colors.green};
		}
	}
`;

export const inputMinus = css`
	${sharedInputStyles}

	button {
		${sharedBtnStyles}
		border: 1.5px solid ${theme.colors.green};
		background: ${theme.colors.gray10};
		color: ${theme.colors.gray40};
	}

	input {
		${sharedBtnInputStyles}
		border: 1.5px solid ${theme.colors.green};
		border-left: none;
	}
`;
