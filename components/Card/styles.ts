import styled, { css } from 'styled-components';

import { IStyledCardProps } from '../../utils/types';

export const Card = styled.div`
  ${({ theme }: IStyledCardProps) => css`
    box-shadow: ${theme.shadows.card};
    display: flex;
    flex-direction: column;
    height: 35rem;
    justify-content: space-between;
    width: 25rem;
  `}
`;

export const CardCategory = styled.h2`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.blue};
    flex-direction: row;
    font-size: ${theme.font.sizes.small};
    justify-content: flex-end;
    text-transform: capitalize;
  `}
`;

export const CardImage = styled.img`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const CardInformation = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 22rem;
    justify-content: space-between;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    background-color: ${theme.colors.white};
  `}
`;

export const CardTitle = styled.div`
  ${({ theme }) => css`
    h1 {
      color: ${theme.colors.primary};
      font-size: ${theme.font.sizes.large};
    }

    h2 {
      color: ${theme.colors.darkGray};
      font-size: ${theme.font.sizes.xsmall};
      text-transform: 
    }
  `}
`;


