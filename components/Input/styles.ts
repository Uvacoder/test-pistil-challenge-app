import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    border: 2px solid ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.darkGray};
    display: flex;
    flex: 1;
    font-size: ${theme.font.sizes.small};
    height: 4rem;
    outline: none;
    margin-right: ${theme.spacings.medium};
    padding: 0 ${theme.spacings.xsmall};
    transition: 0.6s;

    &:focus {
      border-color: ${theme.colors.primaryHover};
    }

    @media (max-width: ${theme.breakpoints.medium}) {
      height: 30rem;
      margin: ${theme.spacings.xsmall} 0;
      padding: 0 ${theme.spacings.xsmall};
      width: 100%;
    }
  `}
`;
