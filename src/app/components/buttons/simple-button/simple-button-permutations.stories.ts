import { SimpleButtonComponent } from './simple-button.component';
import {
  AttributesStatesDefault,
  PseudoStatesDefault,
  withPseudo,
  Orientation,
} from '@ergosign/storybook-addon-pseudo-states-angular';
import { boolean, withKnobs } from '@storybook/addon-knobs';
// import { Meta, Story } from "@storybook/angular";
import { Meta, Story } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { ButtonsModule } from '../buttons.module';

export default {
  title: 'Simple Button Permutations',
  component: SimpleButtonComponent,
  decorators: [
    // moduleMetadata({
    //   declarations: [],
    //   imports: [ButtonsModule]
    // }),
    withPseudo,
  ],
  parameters: {
    withPseudo: {
      selector: ['button'],
      pseudos: [...PseudoStatesDefault, 'focus & hover'],
      attributes: [...AttributesStatesDefault],
      permutations: [
        {
          label: 'Dark theme',
          attr: 'theme',
          value: 'dark',
        },
        {
          label: 'big',
          attr: 'big',
          value: 'dark',
        },
      ],
      styles: {
        orientation: Orientation.COLUMN,
      },
    },
  },
} as Meta;

export const simpleButtonWithTemplate = () => ({
  // component: SimpleButtonComponent,
  // moduleMetadata: {
  //   declarations: [],
  //   imports: []
  // },
  template: `
    <app-simple-button [label]="label" [rounded]="rounded"></app-simple-button>
  `,
  props: {
    label: 'Label',
    rounded: boolean('rounded Corners', false),
  },
});

export const SimpleButton = () => {
  return {
    // component: SimpleButtonComponent,
    props: {
      label: 'Label',
      rounded: boolean('rounded Corners', false),
    },
  };
};
