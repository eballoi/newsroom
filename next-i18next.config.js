const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de", "it"],
  },
  localePath: typeof window === 'undefined' ? path.resolve('./public/locales') : '/locales'
};
