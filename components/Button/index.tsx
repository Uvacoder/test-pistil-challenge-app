import { ButtonProps } from '../../utils/types';
import * as S from './styles';

export const Button = ({
  children,
  isPrimary = false,
  ...props
}: ButtonProps) => (
  <S.Button isPrimary={isPrimary} {...props}>
    {children}
  </S.Button>
);
