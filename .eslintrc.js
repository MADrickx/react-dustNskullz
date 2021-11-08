module.exports = {
    extends: "@becode",
    rules: {
        "unicorn/filename-case": [
            "error",
            {
                cases: {
                    camelCase: true,
                    pascalCase: true,
                },
            },
        ],
        "arrow-parens": [0],
        "react/jsx-max-depth": 0,
    },
};
