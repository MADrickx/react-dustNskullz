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
    },
};
