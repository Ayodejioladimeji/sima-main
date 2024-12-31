module.exports = {
  root: true,
<<<<<<< HEAD
<<<<<<< HEAD
  extends: '@react-native-community',
  rules: {'prettier/prettier': 0},
  semi: ['error', 'never'],
=======
  extends: '@react-native',
>>>>>>> 6fcaa3b (Initial commit)
=======
  extends: ['@react-native', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'react/no-unstable-nested-components': 'off',
    'prettier/prettier': ['error', {endOfLine: 'lf'}],
  },
>>>>>>> f31f635 (Mobile new features)
};
