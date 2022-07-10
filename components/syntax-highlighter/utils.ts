import { HighlightStyle, TagStyle } from "@codemirror/language";
import { tags } from "@lezer/highlight";

export function createHighlighterTokensFromStyles(
  styles: Record<string, string>
): HighlightStyle {
  const highlightConfig: TagStyle[] = Object.entries(styles).map(
    ([key, className]) => {
      if (key.includes("_")) {
        return {
          tag: composeTagsFromString(key),
          class: className,
        };
      }

      return {
        tag: tags[key],
        class: className,
      };
    }
  );

  return HighlightStyle.define(
    highlightConfig.filter((config) => typeof config.tag !== "undefined")
  );
}

const composeTagsFromString = (stringifiedTagName) =>
  stringifiedTagName.split("_").reduceRight((val, fn) => {
    if (!tags[fn]) {
      const error = Error(
        [
          `Unable to find a tag function named ${fn},`,
          `while parsing key ${stringifiedTagName}.`,
          "Key will be ignored in release build.",
          "Fix styles to remove this error.",
        ].join(" ")
      );

      // Don't want to break production app if something slips out,
      // but hopefully by breaking the dev app, a developer will fix
      // any issues before releasing to prod.
      if (process.env.NODE_ENV !== "development") {
        throw error;
      } else {
        console.error({ error });
      }
    }
    return tags[fn](typeof val === "string" ? tags[val] : val);
  });
