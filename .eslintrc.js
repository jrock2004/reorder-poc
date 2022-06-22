module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/eslint-recommended',
    'react-app',
    'plugin:react/recommended',
    'plugin:react-redux/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:test-selectors/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react-redux', 'jsx-a11y', 'test-selectors'],
  rules: {
    'react-redux/mapDispatchToProps-returns-object': 0,
    'react/jsx-sort-default-props': ['error', { ignoreCase: true }],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    'react/sort-prop-types': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: true,
        sortShapeProp: true,
      },
    ],
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'static-methods',
          'lifecycle',
          '/^on.+$/',
          'everything-else',
          'render',
        ],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var', 'import', 'export'],
        next: '*',
      },
      { blankLine: 'any', prev: 'import', next: 'import' },
      { blankLine: 'any', prev: 'export', next: 'export' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['return', 'switch', 'multiline-expression'],
      },
    ],
    'test-selectors/onChange': ['warn', 'always', { testAttribute: 'data-trackid' }],
    'test-selectors/anchor': ['warn', 'always', { testAttribute: 'data-trackid' }],
    'test-selectors/button': ['warn', 'always', { testAttribute: 'data-trackid' }],
    'test-selectors/input': ['warn', 'always', { testAttribute: 'data-trackid' }],
    'test-selectors/onClick': ['warn', 'always', { testAttribute: 'data-trackid' }],
    'test-selectors/onKeyDown': ['warn', 'always', { testAttribute: 'data-trackid' }],
    'test-selectors/onKeyUp': ['warn', 'always', { testAttribute: 'data-trackid' }],
    '@typescript-eslint/no-empty-function': ['error'],
    'react/no-unescaped-entities': ['warn'],
    'react/prop-types': 0,
    '@typescript-eslint/explicit-function-return-type': ['warn'],
  },
};
