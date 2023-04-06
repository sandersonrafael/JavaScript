/* eslint, prettier e .editorconfig

instalar todos através do npm num dev dependence:
npm i @babel/eslint-plugin prettier eslint-config-prettier eslint-plugin-prettier -D
npm install --save-dev @babel/preset-react
*/

/* config .editorconfig
configurar o arquivo .editor config com:

root = true

[*]
indent_style = space
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

*/

/* criar e configurar arquivo .prettierrc:

{
    "singleQuote": true,
    "trailingComma": "es5"
}

*/

/* editar o json do próprio VSCode para autocorreção. adicionar:

"editor.codeActionsOnSave": {"source.fixAll.eslint": true}

*/

/* configurar o .eslint.js com:

module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:prettier/recommended',
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        babelOptions: {
            presets: ['@babel/preset-react'],
        },
        ecmaVersion: 'latest',
        requireConfigFile: false,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier', 'react-hooks'],
    rules: {
        'prettier/prettier': 2,
        'react/jsx-filename-extension': 0,
        'import/prefer-default-export': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
};

*/
