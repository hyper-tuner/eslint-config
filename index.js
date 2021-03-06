module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    es6: true
  },
  settings: {
    'import/core-modules': ['electron'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  extends: [
    'eslint:recommended',
    'react-app',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  plugins: [
    '@typescript-eslint',
    'jsx-a11y',
    'prettier',
    'modules-newline',
  ],
  rules: {
    indent: [2, 2, { SwitchCase: 1 }],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'react/jsx-filename-extension': [1, {
      extensions: ['.jsx', '.tsx'],
    }],
    'import/extensions': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': [1, {
      ImportDeclaration: {
        multiline: true,
        minProperties: 2,
      },
      ExportDeclaration: {
        multiline: true,
        minProperties: 1,
      },
    }],
    'modules-newline/import-declaration-newline': 1,
    'modules-newline/export-declaration-newline': 1,
    quotes: ['error', 'single'],
    'no-console': 0,
    'no-plusplus': 0,
    'import/no-extraneous-dependencies': 0,
    'no-undef': 1,
    'react/require-default-props': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 1,
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 2,
    'arrow-body-style': ['warn', 'as-needed'],
    'react/function-component-definition': 0
  }
};
