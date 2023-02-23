module.exports = {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
        "react-native-reanimated/plugin",
        [
            "module-resolver",
            {
                root: ["./src"],
                alias: {
                    app: "./src",
                    actions: "./src/actions",
                    components: "./src/components",
                    hooks: "./src/hooks",
                    navigation: "./src/navigation",
                    screens: "./src/screens",
                    store: "./src/store",
                    utils: "./src/utils",
                },
            },
        ],
    ],
}
