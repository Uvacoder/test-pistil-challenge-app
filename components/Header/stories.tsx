import { Story, Meta } from '@storybook/react/types-6-0';

import { Header } from '.';

export default {
  component: Header,
  title: 'Header'
} as Meta;

export const HeaderStory: Story = () => (
  <Header />
);


