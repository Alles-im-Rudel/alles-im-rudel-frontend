module.exports = {
  'extends': [
    'plugin:vue/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  'rules': {
    'quotes': ['warn', 'single'],
    'semi': ['warn', 'always'],
    'vue/valid-v-slot': 'off',
    'vue/no-v-html': 'off'
  },
  'globals': {
    'process': 'readonly',
    'window': 'readonly',
    'Promise': 'readonly'
  }
};
