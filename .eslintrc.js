module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'react-hooks',
    'prettier',
  ],
  rules: {
        "prettier/prettier": "error",
        'react/jsx-filename-extension': ['error', {extensions: ['.js', '.jsx']}],
        'import/prefer-default-export': 'off',
        'no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
        'react/jsx-one-expression-per-line': 'off',
        'global-require': 'off',
        'react-native/no-raw-text': 'off',
        'no-param-reassign': 'off',
        'no-underscore-dangle': 'off',
        'camelcase': 'off',
        'no-console': ['error', {allow: ['tron']}],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'object-curly-newline': 'off',
        'implicit-arrow-linebreak': 'off',
        'operator-linebreak': 'off',
        'arrow-parens': ["error", "as-needed"],
        'react/jsx-props-no-spreading': 'off',
        'comma-dangle': ['error', {
          "arrays": "always-multiline",
          "exports": "always-multiline",
          "functions": "never",
          "imports": "always-multiline",
          "objects": "always-multiline",
        }]
  },
  settings: {
    'import/resolver': {
        'babel-plugin-root-import': {
            rootPathSuffix: 'src'
        }
    }
}
};
