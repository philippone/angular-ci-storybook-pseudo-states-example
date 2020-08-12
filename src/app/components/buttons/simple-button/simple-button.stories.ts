import { SimpleButtonComponent } from "./simple-button.component";
import {
  AttributesStatesDefault,
  PseudoStatesDefault,
  withPseudo,
  Orientation,
} from "@ergosign/storybook-addon-pseudo-states-angular";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import { StoryFn } from "@storybook/addons";

export default {
  title: "Simple Button",
  decorators: [withPseudo, withKnobs],
  parameters: {
    withPseudo: {
      selector: "button",
      pseudos: [...PseudoStatesDefault, "focus & hover"],
      attributes: [...AttributesStatesDefault, "big"],
      styles: {
        orientation: Orientation.COLUMN,
      },
    },
  },
};

export const simpleButton = () => ({
  component: SimpleButtonComponent,
  // moduleMetadata: {
  //   declarations: [],
  //   imports: []
  // },
  props: {
    label: "Label",
    rounded: boolean("rounded Corners", false),
  },
});

export const Story = () => {
  return {
    component: SimpleButtonComponent,
  };
};
