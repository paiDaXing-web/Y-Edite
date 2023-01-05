module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  rules: {
    // 参数后面不允许任何空格
    'space-before-function-paren': ['error', 'never'],
    // 尾随逗号
    'comma-dangle': ['error', 'always-multiline'],
    // 禁止在声明前调用 (方法除外)
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    // 允许使用中括号来访问变量
    'dot-notation': 'off',
    // 允许转义字符
    'no-useless-escape': 'off',
    // 允许 new 不赋值
    'no-new': 'off',
    // 允许使用 eval
    'no-eval': 'off',
  },
}
