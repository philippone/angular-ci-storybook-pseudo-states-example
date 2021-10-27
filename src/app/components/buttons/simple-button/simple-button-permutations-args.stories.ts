import { SimpleButtonComponent } from "./simple-button.component";
import {
  AttributesStatesDefault,
  PseudoStatesDefault,
  withPseudo,
  Orientation,
} from "@ergosign/storybook-addon-pseudo-states-angular";
import { boolean, withKnobs } from "@storybook/addon-knobs";
// import { Meta, Story } from "@storybook/angular";
import { Meta, Story } from '@storybook/angular/types-6-0';
import { moduleMetadata } from "@storybook/angular";
import { ButtonsModule } from "../buttons.module";

export default {
  title: "Simple Button Permutations/Simple Button With Args",
  component: SimpleButtonComponent,
  argTypes: {
    label: {
      control:
      'text'
    },
    rounded: {
      control: 'boolean'
    },
    big: {
      control: 'boolean'
    },
    clickFn: {
      action: 'clickFn'
    }

  },
  decorators: [
    // moduleMetadata({
    //   declarations: [],
    //   imports: [ButtonsModule]
    // }),
    withPseudo
  ],
  parameters: {
    withPseudo: {
      selector: ["button"],
      pseudos: [...PseudoStatesDefault, "focus & hover", "focus-visible"],
      attributes: [...AttributesStatesDefault],
      permutations: [
        {
          label: "Dark theme",
          attr: "theme",
          value: "dark",
        },
        {
          label: "big",
          attr: "big",
          value: "dark",
        },
      ],
      styles: {
        orientation: Orientation.COLUMN,
      },
    },
  },
} as Meta;


const Template: Story<SimpleButtonComponent> = (args: SimpleButtonComponent) => ({
  component: SimpleButtonComponent,
  props: args,
});

export const SimpleButtonWithArgs = Template.bind({});

SimpleButtonWithArgs.args = {
  label: 'Label',
  rounded: false,
};

