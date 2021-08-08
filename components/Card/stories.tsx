import { Story, Meta } from '@storybook/react/types-6-0';

import { Card } from '.';
import { IProductProps } from '../../utils/types';

export default {
  title: 'Card',
  component: Card,
  args: {
    id: 1077076,
    strain: 'Lemon Haze',
    strainType: 'Hybrid',
    brand: 'BFS',
    category: 'flower',
    weightGrams: 5,
    placeholderImage: 'https://picsum.photos/400/200',
  },
} as Meta;

export const CardStory: Story<IProductProps> = (args) => (
  <Card {...args} />
);
