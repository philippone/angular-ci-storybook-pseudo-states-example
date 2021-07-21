module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@ergosign/storybook-addon-pseudo-states-angular/register",
    '@ergosign/storybook-addon-pseudo-states-angular/preset-postcss',
    // {
    //   name: "@storybook/addon-postcss",
    //   options: {
    //     postcssLoaderOptions: {
    //       //implementation: require("postcss"),
    //       postcssOptions: {
    //         plugins:[
    //           require("postcss-pseudo-classes")({
    //             blacklist: [
    //               ":root",
    //               ":host",
    //               ":host-context",
    //               ":nth-child",
    //               ":nth-of-type",
    //             ],
    //             prefix: "pseudo-states--",
    //           }),
    //           () => {
    //               debugger;
    //           }
    //       ]}
    //     },
    //   },
    // },
  ],
  core: {
    builder: "webpack5",
  },
};
