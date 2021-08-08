import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.colors.primary};
    box-shadow: ${theme.shadows.card};
    display: flex;
    justify-content: center;
    margin-bottom: ${theme.spacings.medium};
    padding:  ${theme.spacings.medium};
    width: 100%;
  `}
`;
