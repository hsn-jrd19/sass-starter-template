const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  Plugin: [
    postcssPresetEnv({
      stage: 3,
    }),
  ],
};
