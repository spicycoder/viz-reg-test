import type { Meta, StoryObj } from '@storybook/angular';
import { StatsComponent } from "../app/stats/stats.component";

const meta: Meta<StatsComponent> = {
  title: 'Example/Stats',
  component: StatsComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<StatsComponent>;

export const Accounts: Story = {
  args: {
    statistics: [
      {
        title: 'Accounts',
        value: '108'
      },
      {
        title: 'Customers',
        value: '1,800'
      }
    ]
  },
};
