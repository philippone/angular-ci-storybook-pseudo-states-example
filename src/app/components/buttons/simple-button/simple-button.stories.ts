import { SimpleButtonComponent } from "./simple-button.component";
import {
  AttributesStatesDefault,
  PseudoStatesDefault,
  withPseudo,
  Orientation,
} from "@ergosign/storybook-addon-pseudo-states-angular";
import { boolean, withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "Simple Button",
  decorators: [withPseudo, withKnobs]
};

export const simpleButton = () => ({
  component: SimpleButtonComponent,
  props: {
    label: text('Label', 'Button Text'),
    rounded: boolean("rounded Corners", false),
  },
});

simpleButton.parameters = {
  withPseudo: {
    selector: "button",
    pseudos: [...PseudoStatesDefault, "focus & hover"],
    attributes: [...AttributesStatesDefault, "big"],
    styles: {
      orientation: Orientation.COLUMN,
    },
  },
};

export const simpleButton2 = () => {
  return {
    component: SimpleButtonComponent,
    props: {
      label: text('Label', 'Button Text')
    },
  };
};


simpleButton2.parameters = {
  withPseudo: {
    selector: "button",
    // only hover is applied
    pseudos: ['hover'],
    // no attributes are applied
    attributes: ['big'],
    styles: {
      orientation: Orientation.COLUMN,
    },
  },
};