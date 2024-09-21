const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  Plugin: [
    postcssPresetEnv({
      stage: 3,
      features: {
        'logical-properties-and-values': false,
      },
    }),
  ],
};
