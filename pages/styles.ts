import styled, { css } from 'styled-components';
import LoadingOverlay from 'react-loading-overlay';

export const LoadingWrapper = styled(LoadingOverlay)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: ${theme.breakpoints.xsmall}) {
      padding: ${theme.spacings.xxsmall};
    }
  `}
`;

export const Content = styled.section`
  ${({ theme: { spacings, breakpoints } }) => css`
    display: inline-grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: ${spacings.small};
    margin: ${spacings.medium} 0;
    width: 100%;

    @media (max-width: ${breakpoints.xxlarge}) {
      grid-template-columns: repeat(5, 1fr);
    }

    @media (max-width: ${breakpoints.xlarge}) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: ${breakpoints.large}) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: ${breakpoints.medium}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${breakpoints.small}) {
      grid-template-columns: repeat(1, 1fr);
    }
  `}
`;

export const FilterForm = styled.form`
  ${({ theme: { breakpoints } }) => css`
    display: flex;
    flex-direction: row;

    @media (max-width: ${breakpoints.medium}) {
      flex-direction: column;
      height: 30rem;
    }
  `}
`;

export const NoResults = styled.p`
  ${({ theme }) => css`
    align-items: center;
    color: ${theme.colors.darkGray};
    display: flex;
    font-size: ${theme.font.sizes.medium};
    justify-content: center;
    text-align: center;
  `}
`;
