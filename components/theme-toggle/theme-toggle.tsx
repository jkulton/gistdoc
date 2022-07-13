import { useCallback, useEffect, useRef, useState } from "react";
import Moon from "./moon";
import Sun from "./sun";

const resolveColorScheme = (isDark) => (isDark ? "dark" : "light");

export default function ThemeToggle() {
  // This is required to prevent the animation from playing on
  // initial mount as well as update the aria-label.
  const changedRef = useRef(false);
  const [colorScheme, setColorScheme] = useState(null);
  const handleChange = useCallback(
    (ev) => {
      const colorScheme = resolveColorScheme(ev.target.checked);
      if (!changedRef.current) {
        changedRef.current = true;
      }
      setColorScheme(colorScheme);
      // Notify the document so it will update the theme.
      // Refer to _document.js for implementation.
      window.dispatchEvent(
        new CustomEvent("colorSchemeChange", {
          detail: { colorScheme, persist: true },
        })
      );
    },
    [setColorScheme]
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = ({ matches }) => {
      setColorScheme(resolveColorScheme(matches));
    };

    query.addEventListener("change", listener);

    // Sets the initial color scheme based on user's preference.
    // Doing this here so that it's ran on client side only.
    setColorScheme(
      resolveColorScheme(document.documentElement.classList.contains("dark"))
    );

    return () => {
      query.removeEventListener("change", listener);
    };
  }, [setColorScheme]);
  const hasThemeChanged = changedRef.current;

  return (
    <div>
      <input
        type="checkbox"
        title="Toggle between light & dark modes"
        // Screen readers should announce changes to aria-label
        // It's set to auto for the first time since the user didn't
        // actually change it and we set the theme automatically based
        // on preference.
        aria-label={hasThemeChanged ? colorScheme : "auto"}
        aria-live="polite"
        id="theme-toggle"
        className={`sr-only peer`}
        onChange={handleChange}
        data-changed={hasThemeChanged}
        checked={colorScheme === "dark"}
      />
      <div
        className={
          "overflow-hidden rounded-full w-8 h-8 border-2 isolate " +
          "dark:border-gray-200 border-slate-300 bg-gray-50/10 " +
          "peer-focus-visible:outline-2 peer-focus-visible:outline-white " +
          "peer-focus-visible:outline peer-focus-visible:border-sky-600"
        }
      >
        <label
          htmlFor="theme-toggle"
          className={
            '[[aria-label="light"]~*_&]:motion-safe:animate-rotate-0-180 ' +
            '[[aria-label="dark"]~*_&]:motion-safe:animate-rotate-180-360 ' +
            "block h-full w-[200%] whitespace-nowrap rotate-180 origin-center " +
            "select-none dark:rotate-0"
          }
        >
          <Moon className="h-full p-1.5 inline-block" aria-hidden="true" />
          <Sun className="h-full p-1.5 inline-block" aria-hidden="true" />
        </label>
      </div>
    </div>
  );
}
