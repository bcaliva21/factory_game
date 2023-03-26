module.exports = {
    "env": {
        "es2021": true,
        "browser": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
        "@typescript-eslint/parser"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "tsconfigRootDir": "./server",
        "project": "./tsconfig.json"
    },
    "rules": {
        "@typescript-eslint/no-unused-vars": "error",
        // to enforce using type for object type definitions, can be type or interface
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "@typescript-eslint/ban-ts-comment": "off",
    },
    "plugins": ["@typescript-eslint"]
}
