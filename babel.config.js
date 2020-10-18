module.exports = {
  presets: ["next/babel"],
  ignore: ["node_modules"],
  plugins: [["styled-components", { ssr: true }]],
};
