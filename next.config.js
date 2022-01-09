module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: '/:username/:gist_id',
        destination: '/:gist_id',
        permanent: true,
      },
    ]
  },
}
