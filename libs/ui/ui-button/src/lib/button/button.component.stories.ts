import { ButtonStyle } from '@chat-client/models';
import { Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'UI/Button',
  component: ButtonComponent
} as Meta<ButtonComponent>;

export const Default = {
  render: (args: ButtonComponent) => ({
    props: args,
  }),
  args: {
    text: "Button"
  },
};

export const Outline = {
  render: (args: ButtonComponent) => ({
    props: args,
  }),
  args: {
    text: "Button",
    buttonStyle: ButtonStyle.Outline
  },
};

export const Disabled = {
  render: (args: ButtonComponent) => ({
    props: args,
  }),
  args: {
    text: "Button",
    disabled: true
  },
};
