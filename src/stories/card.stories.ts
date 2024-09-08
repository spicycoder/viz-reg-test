import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from '../app/card/card.component';

const meta: Meta<CardComponent> = {
  title: 'Example/Card',
  component: CardComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
};

export const Cookies: Story = {
  args: {
    title: 'Cookies',
    content: 'We are using cookies for no reason.',
    actions: ['Accept', 'Deny'],
  },
};
