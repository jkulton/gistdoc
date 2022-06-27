import React, { useEffect, useRef, useState } from "react";
import {
  EditorView,
  highlightSpecialChars,
  lineNumbers,
} from "@codemirror/view";
import {
  defaultHighlightStyle,
  syntaxHighlighting,
} from "@codemirror/language";
import { languages } from "@codemirror/language-data";
import { EditorState } from "@codemirror/state";
import { createHighlighterTokensFromStyles } from "./utils";
import styles from "./syntax-highlighter.module.css";

export interface SyntaxHighlighterProps {
  code: string;
  language: string;
}

const highlightStyle = createHighlighterTokensFromStyles(styles);

export default function SyntaxHighlighter({
  language,
  code = "",
}: SyntaxHighlighterProps) {
  const editorViewRef = useRef<EditorView>();
  const languageConfig = languages.find((langConfig) =>
    langConfig.alias.includes(language)
  );
  const block = useRef();

  useEffect(() => {
    let mounted = true;

    (async function () {
      const languageSupport = await languageConfig.load();

      if (block.current && mounted) {
        const extensions = [
          lineNumbers(),
          EditorView.editable.of(false),
          EditorView.theme(
            {
              ".cm-scroller": {
                // Shifting the horizontal scrollbar slightly below
                // the bottom line. This reverts the bottom padding
                // added on the `pre` tag.
                paddingBottom: "0.857143em",
                marginBottom: "-0.857143rem",
              },
              ".cm-gutters": {
                borderRight: "1px solid #739fee73",
                color: "#739fee",
                // Matching the `pre` tag's background since the editor
                // text sits below the gutter when scrolled horizontal.
                backgroundColor: "var(--tw-prose-pre-bg)",
                minWidth: "4ch",
                marginRight: "12px",
              },
            },
            { dark: true }
          ),
          syntaxHighlighting(defaultHighlightStyle),
          syntaxHighlighting(highlightStyle),
          highlightSpecialChars(),
          languageSupport,
          EditorState.tabSize.of(2),
        ];

        let view = new EditorView({
          doc: code.trimEnd(),
          extensions,
          parent: block.current,
        });

        editorViewRef.current = view;
      }
    })();

    return () => {
      mounted = false;
      // If there's a view, destroy it.
      editorViewRef.current?.destroy();
    };
  }, [languageConfig, code]);

  return <div ref={block} className={styles.codeBlock}></div>;
}
