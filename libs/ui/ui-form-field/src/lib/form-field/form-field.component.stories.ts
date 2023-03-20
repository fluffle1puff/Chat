import { componentWrapperDecorator, moduleMetadata, Meta, Story } from '@storybook/angular';
import { FormFieldComponent } from './form-field.component';
import { UiInputModule } from '@chat-client/ui/ui-input';

export default {
  title: 'UI/FormField',
  component: FormFieldComponent,
  decorators: [
    moduleMetadata({
      declarations: [FormFieldComponent],
      imports: [UiInputModule]
    }),
    componentWrapperDecorator(story => `<div style="width: 300px">${story}</div>`),
  ]
} as Meta<FormFieldComponent>;

const LabelTopPositionTemplate: Story<FormFieldComponent> = (args: FormFieldComponent) => ({
  props: args,
  template: `
    <cc-form-field label="Name" labelPosition="top">
      <cc-input inputStyle="filled"></cc-input>
    </cc-form-field>
  `
});

export const LabelTopPosition = LabelTopPositionTemplate.bind({});

const LabelBottomPositionTemplate: Story<FormFieldComponent> = (args: FormFieldComponent) => ({
  props: args,
  template: `
    <cc-form-field label="Name" labelPosition="bottom">
      <cc-input inputStyle="filled"></cc-input>
    </cc-form-field>
  `
});

export const LabelBottomPosition = LabelBottomPositionTemplate.bind({});


const LabelLeftPositionTemplate: Story<FormFieldComponent> = (args: FormFieldComponent) => ({
  props: args,
  template: `
    <cc-form-field label="Name" labelPosition="left">
      <cc-input inputStyle="filled"></cc-input>
    </cc-form-field>
  `
});

export const LabelLeftPosition = LabelLeftPositionTemplate.bind({});

