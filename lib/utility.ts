/**
 * Given an array of filenames returns the first
 * which appears to be a markdown file or `undefined`
 * if none are found.
 *
 * @param {string[]} filenames - a list of filenames
 * @return {string|undefined} markdown filename or `undefined`
 */
function findMarkdownFile(filenames: string[]) {
  return filenames?.find((filename) => {
    const parts = filename.toLowerCase().split(".");
    const ext = parts[parts.length - 1];
    return ext === "md" || ext === "markdown";
  });
}

function fetcher(url: string) {
  return fetch(url).then((res) => res.json());
}

export { findMarkdownFile, fetcher };
