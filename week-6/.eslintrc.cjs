module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:vue/vue3-essential', 'standard'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.vue']
      }
    }
  },
  'prettier/prettier': [
    'error',
    {
      endOfLine: 'auto'
    }
  ],
  plugins: ['vue'],
  rules: {}
}
