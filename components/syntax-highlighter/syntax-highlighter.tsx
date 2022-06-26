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
  children: React.ReactNode;
  language: string;
  onLoaded: () => void;
}

const highlightStyle = createHighlighterTokensFromStyles(styles);

export default function SyntaxHighlighter({
  language,
  children = "",
  onLoaded = () => {},
}: SyntaxHighlighterProps) {
  const editorViewRef = useRef<EditorView>();
  const [loading, setLoading] = useState(true);
  const languageConfig = languages.find((langConfig) =>
    langConfig.alias.includes(language)
  );
  const block = useRef();

  useEffect(() => {
    let mounted = true;

    (async function () {
      setLoading(true);
      const languageSupport = await languageConfig.load();

      if (block.current && mounted) {
        const extensions = [
          lineNumbers(),
          EditorView.editable.of(false),
          EditorView.theme(
            {
              ".cm-gutters": {
                borderRight: "1px solid #739fee73",
                color: "#739fee",
                backgroundColor: "transparent",
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
          doc: String(children).trimEnd(),
          extensions,
          parent: block.current,
        });

        editorViewRef.current = view;
        setLoading(false);
      }
    })();

    return () => {
      mounted = false;
      // If there's a view, destroy it.
      editorViewRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      onLoaded();
    }
  }, [loading]);

  return <div ref={block} className={styles.codeBlock}></div>;
}
