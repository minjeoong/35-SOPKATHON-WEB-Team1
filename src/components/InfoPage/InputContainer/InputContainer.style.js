import { theme } from '@/styles/theme';
import { css } from '@emotion/react';

export const Container = css`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	li {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	label {
		width: 100%;
		color: ${theme.colors.gray40};
		${theme.fonts.title3}
	}
`;

export const NullDate = css`
	display: flex;
	align-items: center;
	gap: 0.4rem;
	color: ${theme.colors.gray40};

	span {
		${theme.fonts.body3}
	}
`;
