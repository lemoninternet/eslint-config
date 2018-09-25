# ESLint Config

## Rules

Extends `eslint:recommended` and has the following changes to the rules:

```json
{
    "rules": {
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
        ]
    },
    "extends": "eslint:recommended"
}
```
To learn more about rules please read the documentation: https://eslint.org/docs/rules/

## Usage

In your configuration set `extends` to use this package.

```json
{
    "extends": "eslint-config-rickerd"
}
```
