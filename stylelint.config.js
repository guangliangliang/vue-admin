/*
 * @Description:
 * @Version: 1.0
 * @Autor: unicom
 * @Date: 2020-12-24 09:46:02
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-15 10:55:16
 */
// 根目录下新建stylelint.config.js
module.exports = {
  defaultSeverity: 'error',
  extends: [
    /* 'stylelint-config-standard',
        'stylelint-config-rational-order', // 属性排序规则
        'stylelint-config-prettier' */
  ],
  plugins: [
    /* 'stylelint-order',
        'stylelint-scss',
        'stylelint-declaration-block-no-ignored-properties' */
  ],
  rules: {
    /*  // 不要使用已被 autoprefixer 支持的浏览器前缀
        'media-feature-name-no-vendor-prefix': true,
        'at-rule-no-vendor-prefix': true,
        'selector-no-vendor-prefix': true,
        'property-no-vendor-prefix': true,
        'value-no-vendor-prefix': true,
        'no-descending-specificity': null,
        //https://github.com/stylelint/stylelint/issues/4114
        'function-calc-no-invalid': null,
        'function-url-quotes': 'always',
        'font-family-no-missing-generic-family-keyword': null,
        // 'plugin/declaration-block-no-ignored-properties': true,
        'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['mixin', 'include', 'if', 'else']
            }
        ],
        "string-quotes": "single",
        "property-no-unknown":  [
             true,
            {
                "ignoreProperties": [
                    ""
                ]
            }
        ],
        "selector-pseudo-class-no-unknown": [
            true,
            {
                "ignorePseudoClasses": [
                    "export"
                ]
            }
        ],
        indentation: 4*/
  },
  ignoreFiles: ['dist/**', '**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts']
}
