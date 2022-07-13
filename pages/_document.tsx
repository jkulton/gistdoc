import { Html, Head, Main, NextScript } from "next/document";

const setTheme = `
(function () {
  const COLOR_SCHEME_STORAGE_KEY = "colorScheme";

  const prefersDarkColorSchemeMediaQuery = window.matchMedia(
    "(prefers-color-scheme: dark)"
  );

  function tryStorageMethod(action, ...args) {
    try {
      return localStorage[action](...args);
    } catch (ex) {}
  }

  const COLOR_SCHEMES = ["light", "dark"];
  const resolveColorScheme = (prefersDark) =>
    COLOR_SCHEMES[Number(prefersDark)];
  let prefersColorSchemeGlobal = resolveColorScheme(
    prefersDarkColorSchemeMediaQuery.matches
  );

  window.addEventListener(
    "colorSchemeChange",
    ({ detail: { persist, colorScheme } }) => {
      setPreferredColorScheme(colorScheme);

      if (persist) {
        persistColorScheme(colorScheme);
      }
    },
    { passive: true }
  );

  initializeColorScheme();

  // If user changes the OS settings, update the current scheme
  // only if they don't have a preference stored.
  prefersDarkColorSchemeMediaQuery.addEventListener(
    "change",
    function (result) {
      // Update preferred color scheme
      prefersColorSchemeGlobal = resolveColorScheme(result.matches);
      setPreferredColorScheme(prefersColorSchemeGlobal);
      // Cleanup key since the user changed preference at the OS level.
      tryStorageMethod("removeItem", COLOR_SCHEME_STORAGE_KEY);
    }
  );

  function setPreferredColorScheme(colorScheme) {
    if (COLOR_SCHEMES.includes(colorScheme) === false) {
      return;
    }
    const oppositeScheme = COLOR_SCHEMES.find((x) => x !== colorScheme);
    // only swap out classname if the opposite exist.
    const classes = document.documentElement.classList;
    const replaced = classes.replace(oppositeScheme, colorScheme);

    // If no color scheme has been set yet, then we need to add one
    if (!replaced) {
      classes.add(colorScheme);
    }
  }

  function persistColorScheme(colorScheme) {
    if (prefersColorSchemeGlobal === colorScheme) {
      tryStorageMethod("removeItem", COLOR_SCHEME_STORAGE_KEY);
    } else {
      tryStorageMethod("setItem", COLOR_SCHEME_STORAGE_KEY, colorScheme);
    }
  }

  function initializeColorScheme() {
    let colorScheme = tryStorageMethod("getItem", COLOR_SCHEME_STORAGE_KEY);
    if (colorScheme === null) {
      colorScheme = prefersColorSchemeGlobal;
      // If stored value is the same as global value, just remove it.
      // This assumes the user changed their preference in their OS at
      // some point.
    } else if (colorScheme === prefersColorSchemeGlobal) {
      tryStorageMethod("removeItem", COLOR_SCHEME_STORAGE_KEY);
    }

    setPreferredColorScheme(colorScheme);
  }
})();
`;

export default function Document() {
  return (
    <Html>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: setTheme }}></script>
      </Head>
      <body className="dark:bg-gray-900 dark:text-gray-50 text-gray-800 break-words motion-safe:transition-colors motion-safe:duration-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
