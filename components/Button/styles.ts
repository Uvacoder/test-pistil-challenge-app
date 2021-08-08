import styled, { css } from 'styled-components';

import { IStyledButtonProps } from '../../utils/types';

export const Button = styled.button`
  ${({ theme, isPrimary }: IStyledButtonProps) => css`
    align-items: center;
    border: none;
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    cursor: pointer;
    display: flex;
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: 700;
    height: 4rem;
    justify-content: center;
    outline: none;
    margin-right: ${theme.spacings.medium};
    padding: 0 ${theme.spacings.xsmall};
    transition: 0.5s;
    text-transform: uppercase;
    width: 10rem;

    @media (max-width: ${theme.breakpoints.small}) {
      margin: ${theme.spacings.xxsmall} 0;
      width: 100%;
    }

    ${isPrimary
      ? css`
          background: ${theme.colors.primary};

          &:hover {
            background: ${theme.colors.primaryHover};
          }
        `
      : css`
          background: ${theme.colors.secondary};
          border: 2px solid ${theme.colors.secondary};

          &:hover {
            background: ${theme.colors.secondaryHover};
            color: ${theme.colors.white};
          }
        `}
  `}
`;
