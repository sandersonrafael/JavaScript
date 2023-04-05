module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        indent: ['error', 4],
        'react/jsx-filename-extension': 'off',
        'react/jsx-indent': 'off',
        'react/state-in-constructor': 'off',
        'linebreak-style': 'off',
        'react/jsx-indent-props': ['error', 4],
        'class-methods-use-this': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/forbid-prop-types': 'off',
    },
};
