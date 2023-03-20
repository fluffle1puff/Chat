import { FormsModule } from '@angular/forms';
import { componentWrapperDecorator, Meta, moduleMetadata } from '@storybook/angular';
import { TextareaComponent } from './textarea.component';
import { InputStyle } from '@chat-client/models';

export default {
  title: 'UI/Textarea',
  component: TextareaComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule]
    }),
    componentWrapperDecorator(story => `<div style="width: 300px">${story}</div>`),
  ]
} as Meta<TextareaComponent>;

export const Default = {
  render: (args: TextareaComponent) => ({
    props: args,
  }),
  args: {
    placeholder: 'Text something...'
  },
};

export const Outline = {
  render: (args: TextareaComponent) => ({
    props: args,
  }),
  args: {
    placeholder: 'Text something...',
    inputStyle: InputStyle.Outline,
  },
};

export const Filled = {
  render: (args: TextareaComponent) => ({
    props: args,
  }),
  args: {
    placeholder: 'Text something...',
    inputStyle: InputStyle.Filled,
  },
};
