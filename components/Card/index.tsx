import { IProductProps } from '../../utils/types';
import * as S from './styles';

export const Card = ({
  strain,
  strainType,
  category,
  placeholderImage,
}: IProductProps) => (
  <S.Card category={category}>
    <S.CardImage src={placeholderImage} alt={`${strain}`} />
    <S.CardInformation>
      <S.CardTitle>
        <h1>{strain}</h1>
        <h2>{strainType}</h2>
      </S.CardTitle>
      <S.CardCategory>{category}</S.CardCategory>
    </S.CardInformation>
  </S.Card>
);
