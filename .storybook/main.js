module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-actions",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-contexts/register",
    "@storybook/addon-a11y/register",
    "@storybook/addon-knobs",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",

  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
