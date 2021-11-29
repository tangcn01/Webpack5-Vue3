module.exports = {
  presets: ["@babel/preset-env", "@vue/app"],
  plugins: [
    [
      "import",
      { libraryName: "ant-design-vue", libraryDirectory: "es", style: true },
    ],
  ],
};
