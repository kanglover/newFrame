// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',


    "no-mixed-spaces-and-tabs": [0],//关闭禁止混用tab和空格
    "no-multi-spaces": 0,//关闭禁用空格

    "no-mixed-spaces-and-tabs": [2, false],//禁止混用tab和空格
    "no-regex-spaces": 0,//禁止在正则表达式字面量中使用多个空格
    "no-spaced-func": 0,//函数调用时 函数名与()之间不能有空格
    "no-multi-spaces": 0,//不能用多余的空格
    "no-trailing-spaces": 0,//一行结束后面不要有空格
    "no-irregular-whitespace": 0,//不能有不规则的空格
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
