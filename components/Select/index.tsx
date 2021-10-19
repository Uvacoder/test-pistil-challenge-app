import { ISelectProps } from '../../utils/types';
import * as S from './styles';

export const Select = ({
  children,
  ...props
}: ISelectProps) => (
  <S.Select {...props} data-testid="select">
    {children}
  </S.Select>
);
