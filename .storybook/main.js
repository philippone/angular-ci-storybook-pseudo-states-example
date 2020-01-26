const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.ts'],
  presets: [
    "storybook-addon-pseudo-states-angular/preset-postcss"
    // tests:
    // {
    //   name: ""storybook-addon-pseudo-states-angular/preset-postcss"",
    //   options: {
    //     postCSSDefaultOptions: {
    //       prefix: 'test--'
    //     }
    //   }
    // }
    // path.resolve('./.storybook/my-preset')
    // {
    //   name: path.resolve('./.storybook/my-preset'),
    //   // options: {
    //   //   cssLoaderOptions: {
    //   //     modules: true,
    //   //     localIdentName: '[path][name]__[local]',
    //   //   }
    //   // }
    // }
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-notes',
    "storybook-addon-pseudo-states-angular/register",  // enable toolbar button
  ],
  // tests
  /*webpackFinal: (webpackConfig, { options }) => {
    const { module = {} } = webpackConfig;
    const {
      postCSSDefaultOptions,
      cssLoaderOptions,
      sassLoaderOptions,
      rule = {},
    } = options;

    console.log({cssLoaderOptions});
    console.log({postCSSDefaultOptions});
    console.log(options);
    // return webpackConfig;
    return null;
  }*/
  // webpackFinal: (config) => console.dir(config, { depth: null }) || config,
};
