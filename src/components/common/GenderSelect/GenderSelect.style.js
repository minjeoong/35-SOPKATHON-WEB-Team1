import { css } from '@emotion/react';
import { theme } from '@/styles/theme';

export const container = css`
  display: flex;
  width: 100%;
  height: 4rem;
  border-radius: 20px;
  overflow: hidden;
  background-color: ${theme.colors.gray10};
  border: 1.5px solid ${theme.colors.green};
`;

export const genderTitle = css`
  display: flex;
  ${theme.fonts.title3}
  color: ${theme.colors.gray40};
  width: 100%;
  height: 2.6rem;
  align-items: center;
`;

export const option = (isSelected) => css`
  ${theme.fonts.body1}
  flex: 1;
  text-align: center;
  padding: 1rem 6.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${isSelected ? theme.colors.green : theme.colors.gray10};
  color: #555;
`;
