import { theme } from '@/styles/theme';
import { css } from '@emotion/react';

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

export const itemStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
`;


export const titleStyle = css`
  ${theme.fonts.head1}
  margin-top: 2.8rem;
  margin-bottom: 1.2rem;
`;

export const contentStyle = css`
  ${theme.fonts.body2}
  text-align: center;
`;
