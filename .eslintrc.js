/* eslint-disable no-undef */
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "react/react-in-jsx-scope": 0,
        "react/prop-types": 0,
        "no-unused-vars": 0,
    },
    settings: {
        react: {
            version: "17",
        },
    },
};
