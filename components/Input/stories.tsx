import { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Input } from '.';

export default {
  args: {
    placeholder: 'filter by strain',
  },
  component: Input,
  title: 'Input',
} as Meta;

export const InputStory: Story = (args) => {
  const [filter, setFilter] = useState('');
  return (
    <Input
      {...args}
      value={filter}
      onChange={(e: any) => setFilter(e.target.value)}
    />
  );
};
