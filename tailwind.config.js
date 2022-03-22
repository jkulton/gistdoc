module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            // In markdown, code starting with ``` are block
            // style code snippets vs a single ` which are
            // inline snippets. The `code` element by default
            // is an inline element. Remark wraps block style
            // code snippets in a `pre` tag. This attempts to
            // target those elements to make them block elements.
            // This also makes code blocks respect `pre`'s
            // padding when scrolled.
            "pre > code": {
              display: "block",
              overflow: "auto",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
