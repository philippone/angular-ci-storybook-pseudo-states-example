import { SimpleButtonComponent } from './simple-button.component';
import { AttributesStatesDefault, withPseudo } from '@ergosign/storybook-addon-pseudo-states-angular';
import { boolean, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Simple Button without Pseudo',
  decorators: [withKnobs],
  parameters: {
    withPseudo: {
      selector: 'button',
      attributes: [...AttributesStatesDefault, 'big']
    }
  }
};

export const simpleButton = () => ({
  component: SimpleButtonComponent,
  moduleMetadata: {
    declarations: [SimpleButtonComponent],
    imports: []
  },
  props: {
    label: 'Label',
    rounded: boolean('rounded Corners', false)
  }
});


export const Story = () => {
  return {
    component: SimpleButtonComponent
  };
};
