import styled, { css } from 'styled-components';


export const Select = styled.select`
  ${({ theme }) => css`
    align-items: center;
    border: 2px solid ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.darkGray};
    cursor: pointer;
    display: flex;
    font-size: ${theme.font.sizes.small};
    height: 4rem;
    justify-content: center;
    outline: none;
    margin-right: ${theme.spacings.medium};
    padding: 0 ${theme.spacings.xsmall};
    transition: 0.5s;
    width: 20rem;

    @media (max-width: ${theme.breakpoints.small}) {
      margin: ${theme.spacings.xxsmall} 0;
      width: 100%;
    }
  `}
`;
