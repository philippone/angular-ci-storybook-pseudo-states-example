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
  title: "Simple Button",
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
    withPseudo
  ],
  parameters: {  
    withPseudo: {
      selector: ["button"],
      pseudos: [...PseudoStatesDefault, "focus & hover"],
      attributes: [...AttributesStatesDefault],
      styles: {
        orientation: Orientation.COLUMN,
      },
    },
  },
} as Meta;;


const Template: Story<SimpleButtonComponent> = (args: SimpleButtonComponent) => ({
  component: SimpleButtonComponent,
  props: args,
});

export const SimpleButtonWithArgs = Template.bind({});

SimpleButtonWithArgs.args = {
  label: 'Label',
  rounded: false,
};

