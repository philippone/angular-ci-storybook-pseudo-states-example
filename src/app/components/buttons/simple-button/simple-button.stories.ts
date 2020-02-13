import { SimpleButtonComponent } from './simple-button.component';
import { withPseudo } from 'storybook-addon-pseudo-states-angular';
import { AttributesStateOrderDefault, PseudoStateOrderDefault } from 'storybook-addon-pseudo-states-angular/dist/share/types';

export default {
  title: 'Simple Button',
  decorators: [withPseudo],
  parameters: {
    withPseudo: {
      selector: 'button',
      stateComposition: {
        pseudo: PseudoStateOrderDefault,
        attributes: [...AttributesStateOrderDefault, 'big']
      }
    }
  }
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
    component: SimpleButtonComponent
  };
};
