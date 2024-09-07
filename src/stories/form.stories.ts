import type { Meta, StoryObj } from '@storybook/angular';
import { userEvent, within, expect } from '@storybook/test';
import { FormComponent } from '../app/form/form.component';

const meta: Meta<FormComponent> = {
  title: 'Example/Form',
  component: FormComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<FormComponent>;

export const Default: Story = {
};

export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId('email'), 'johndoe@mail.com');
    await userEvent.type(canvas.getByTestId('username'), 'johndoe');
    await userEvent.type(canvas.getByTestId('password'), 'helloWorld18!');

    await userEvent.click(canvas.getByRole('button'));

    // 👇 Assert DOM structure
    await expect(
      canvas.getByText(
        'johndoe@mail.com johndoe'
      ),
    ).toBeInTheDocument();
  }
};
