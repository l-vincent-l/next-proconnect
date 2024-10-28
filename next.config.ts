/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config: {
    module: { rules: { test: RegExp; type: string }[] };
  }) => {
    config.module.rules.push({
      test: /\.woff2$/,
      type: "asset/resource",
    });
    return config;
  },
  //This option requires Next 13.1 or newer, if you can't update you can use this plugin instead: https://github.com/martpie/next-transpile-modules
  transpilePackages: [
    "@codegouvfr/react-dsfr",
    "tss-react", // This is for MUI or if you use htts://tss-react.dev
  ],
};

module.exports = nextConfig;
