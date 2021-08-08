import Image from 'next/image';
import * as S from './styles';

export const Header = () => (
  <S.Header>
    <Image 
      src="/static/pistil-logo.png" 
      alt="Pistil Data"
      width="600"
      height="200"
    />
  </S.Header>
);
