import { Story, Meta } from '@storybook/react/types-6-0';

import { Button } from '.';
import { ButtonProps } from '../../utils/types';

export default {
  component: Button,
  title: 'Button'
} as Meta;

export const PrimaryButtonStory: Story<ButtonProps> = () => (
  <Button
    isPrimary
    onClick={() => alert('Primary Button')}
    type="submit"
  >
    Primary
  </Button>
);

export const SecondaryButtonStory: Story<ButtonProps> = () => (
  <Button 
    onClick={() => alert('Secondary Button')} 
    type="submit" >
    Secondary
  </Button>
);
