const { root } = require('postcss');

module.exports = {
  root: true,

  parser: '@typescript-eslint/parser',

  globals: { angular: false, module: false, inject: false, document: false },
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'prettier',
    'plugin:tailwindcss/recommended',
    'plugin:import/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    react: { version: '18.2' },
    'import/resolver': {
      typescript: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },

  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.ts', '.jsx', '.tsx'] },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/await-thenable': 'error',
    'import/prefer-default-export': 'error',
  },
  ignorePatterns: ['tailwind.config.ts'],
};
