module.exports = {
  "parserOptions": {
    "ecmaFeatures": {
      "allowImportExportEverywhere": true
    },
    "sourceType": "module"
  },
  rules: {
    "indent": [
      "error",
      4
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "warn",
      "double"
    ],
    "semi": [
      "warn",
      "always"
    ],
  },
  extends: "eslint:recommended"
};
