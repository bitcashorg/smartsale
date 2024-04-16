const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/typescript",
    "@vercel/style-guide/eslint/browser",
    "@vercel/style-guide/eslint/react",
    "@vercel/style-guide/eslint/next",
    "eslint-config-turbo",
    // "next/core-web-vitals",
    // "prettier",
    // "plugin:tailwindcss/recommended"
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
      node: {
        extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],
  // add rules configurations here
  rules: {
    "import/no-default-export": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "no-param-reassign": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "no-promise-executor-return":"off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "no-unused-vars": "off",
    "jsx-a11y/anchor-has-content": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-shadow": "off",
    "no-console": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "jsx-a11y/heading-has-content": "off",
    "react/no-unstable-nested-components": "off",
    "no-nested-ternary": "off",
    "turbo/no-undeclared-env-vars": "off",
    "@typescript-eslint/prefer-optional-chain": "off",
    "@typescript-eslint/naming-convention": "off",
    "no-alert": "off",
    "no-constant-binary-expression": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "eqeqeq": "off",
    "prefer-named-capture-group": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "eslint-comments/require-description": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/require-await": "off",
    "import/named": "off",
    "array-callback-return": "off",
    "@typescript-eslint/await-thenable": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "import/no-cycle": "off",
    "no-useless-escape": "off",
    "no-redeclare": "off",
    "no-extra-boolean-cast": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/no-empty-function": "off",
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/consistent-indexed-object-style": "off",
    "react/no-unknown-property": "off",
    "@typescript-eslint/no-empty-interface": "off"
  },
};


// {
//   "$schema": "https://json.schemastore.org/eslintrc",
//   "root": true,
//   "extends": [
//     "next/core-web-vitals",
//     "prettier",
//     "plugin:tailwindcss/recommended"
//   ],
//   "plugins": ["tailwindcss", "import"],
//   "rules": {
//     "tailwindcss/no-custom-classname": "off",
//     "tailwindcss/classnames-order": "off",
//     "import/no-unused-modules": [1, { "unusedExports": true }]
//   },
//   "settings": {
//     "tailwindcss": {
//       "callees": ["cn", "cva"],
//       "config": "tailwind.config.js"
//     }
//   },
//   "overrides": [
//     {
//       "files": ["*.ts", "*.tsx"],
//       "parser": "@typescript-eslint/parser"
//     }
//   ]
// }

// // TODO: dead code detection

// // https://blog.logrocket.com/how-detect-dead-code-frontend-project/
