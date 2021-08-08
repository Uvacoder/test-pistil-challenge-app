import { Story, Meta } from '@storybook/react/types-6-0';

import { Select } from '.';
import { ISelectProps } from '../../utils/types';

export default {
  component: Select,
  title: 'Select'
} as Meta;

export const SelectStory: Story<ISelectProps> = () => (
  <Select
  >
    <option value="">Select one type</option>
    <option value="flower">Flower</option>
    <option value="vape">Vape</option>
  </Select>
);
