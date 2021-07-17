module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-explicit-any': 2,
    'no-spaced-func': 'off',
    'jest/no-disabled-tests': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'eslint-comments/no-unused-disable': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
