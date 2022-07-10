module.exports = {
  // Leaving this off for now.
  // Codemirror does not minify correctly with this on.
  swcMinify: false,
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: "/:username/:gist_id",
        destination: "/:gist_id",
        permanent: true,
      },
    ];
  },
};
