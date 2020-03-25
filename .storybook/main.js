const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.ts'],
  presets: [
    "storybook-addon-pseudo-states-angular/preset-postcss"
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-notes',
    "storybook-addon-pseudo-states-angular/register",  // enable toolbar button
  ],
};
