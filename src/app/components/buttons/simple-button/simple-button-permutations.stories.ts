import { SimpleButtonComponent } from "./simple-button.component";
import {
  AttributesStatesDefault,
  PseudoStatesDefault,
  withPseudo,
  Orientation,
} from "@ergosign/storybook-addon-pseudo-states-angular";
import { boolean, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Simple Button Permutations",
  decorators: [withPseudo, withKnobs],
  parameters: {
    withPseudo: {
      selector: ["button"],
      pseudos: [...PseudoStatesDefault, "focus & hover"],
      attributes: [...AttributesStatesDefault, "big"],
      permutations: [
        {
          label: "Dark theme",
          attr: "theme",
          value: "dark",
        },
        "big",
      ],
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
  template: `
    <app-simple-button [label]="label" [rounded]="rounded"></app-simple-button>
  `,

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
