const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.ts"],
  presets: [
    {
      name: "@ergosign/storybook-addon-pseudo-states-angular/preset-postcss",
      // options: {
      //   postCssLoaderPseudoClassesPluginOptions: {
      //     // prefix: 'my-custom-pseudo-sates--',
      //     //blacklist: [":nth-child", ":nth-of-type", ":test"],
      //   },
      // },
    },
  ],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-notes",
    "@storybook/addon-knobs",
    "@storybook/addon-viewport",
    "@ergosign/storybook-addon-pseudo-states-angular/register", // enable toolbar button
  ],
};
