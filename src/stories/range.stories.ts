import type { Meta, StoryObj } from '@storybook/angular';
import { RangeComponent } from "../app/range/range.component";

const meta: Meta<RangeComponent> = {
  title: 'Example/Range',
  component: RangeComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<RangeComponent>;

export const Default: Story = {
};

export const Zero: Story = {
  args: {
    min: 0,
    max: 100,
    value: 0
  },
};

export const Quarter: Story = {
  args: {
    min: 0,
    max: 100,
    value: 25
  },
};

export const Half: Story = {
  args: {
    min: 0,
    max: 100,
    value: 50
  },
};

export const ThreeForth: Story = {
  args: {
    min: 0,
    max: 100,
    value: 75
  },
};

export const Full: Story = {
  args: {
    min: 0,
    max: 100,
    value: 100
  },
};
