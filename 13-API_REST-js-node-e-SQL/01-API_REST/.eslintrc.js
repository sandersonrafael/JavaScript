module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: 'airbnb-base',
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 4],
        // 'no-console': 'off',
        // 'no-unused-vars': 'off',
        'import/no-extraneous-dependencies': 'off',
        'class-methods-use-this': 'off',
        'quote-props': 'off',
        'import/first': 'off',
        'no-param-reassign': 'off',
        'linebreak-style': 'off',
        'max-len': 'off',
    },
};
