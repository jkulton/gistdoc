module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: [
      'githubusercontent.com',
      'avatars.githubusercontent.com'
    ]
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
