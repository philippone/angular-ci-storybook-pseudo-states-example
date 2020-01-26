import { SimpleButtonComponent } from './simple-button.component';
import { withPseudo } from 'storybook-addon-pseudo-states-angular';

export default {
  title: 'Simple Button',
  decorators: [withPseudo],
  parameters: {
    withPseudo: { selector: 'button'},
  },
};

export const simpleButton = () => ({
  component: SimpleButtonComponent,
  // moduleMetadata: {
  //   declarations: [],
  //   imports: []
  // },
  props: {
    label: 'Label'
  }
});


export const Story = () => {
  return {
    component: SimpleButtonComponent,
  };
};
