module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "plugins": [
        'prefer-arrow'
    ],
    "extends": "standard-with-typescript",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    ignorePatterns: ['.eslintrc.cjs', 'dist', 'node_modules'],
    rules: {
        'arrow-body-style': 'error',
        'prefer-const': 'error',
        'no-var': 'error',
        'prefer-arrow-callback': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'prefer-arrow/prefer-arrow-functions': [
          'warn',
          {
            disallowPrototype: true,
            singleReturnOnly: false,
            classPropertiesAllowed: false
          }
        ],
        'multiline-ternary': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off'
      }
}
