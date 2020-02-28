module.exports = {
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    '@typescript-eslint/indent': [2, 2],
    'import/extensions': 0,
    'max-len': [1, { 'code': 160 }],
  },
  globals: {
    jest: false,
    beforeEach: false,
    afterEach: false,
    describe: false,
    it: false,
    expect: false,
  }
};