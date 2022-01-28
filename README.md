<img src="./public/gistdoc.png" width="160" alt="gistdoc logo" />

# Gistdoc

Quickly view GitHub markdown gists as simple blog-style pages

## Usage
1. Go to a GitHub gist with at least one markdown file
2. Change the domain in your browser from `gist.github.com` to `gistdoc.com`
3. Hit enter
4. 🎉

## About
When you visit a gist path on Gistdoc the markdown content from the gist is retrieved from the GitHub API and rendered.

Gist IDs are uniquely identifable, so you can omit the username from the path while using Gistdoc. For example, these two URLs will render the same document:

- https://gistdoc.com/jkulton/fcc75f45043ef5f953aa2354b05cd753
- https://gistdoc.com/fcc75f45043ef5f953aa2354b05cd753

## FAQ

### What is Gistdoc for?
- Viewing rendered markdown in a clean, blog-like format
- Quickly creating a post for sharing
- Presenting content in a meeting
- A primitive [blog](https://www.gistdoc.com/f426fe3488ff3eebf37456fb1706b45c)

### Where do I sign up?
No sign up necessary. Just find (or create) a markdown gist and then render it with Gistdoc.

### Does this work for secret gists?
Yes! Secret gists aren't private, anyone with the link can view a secret gist.3

### Why isn't my gist working?
Make sure your gist includes a file ending in either .md or .markdown.

### Are there any limits?
Gistdoc uses your browser to retrieve gist content from the GitHub API. GitHub's endpoint for getting gists has a limit of 60 requests per hour for non-authenticated clients. It's unlikely you will exceed this limit while using Gistdoc unless you are viewing many documents in a short period of time. If you want to check your usage look at [the GitHub rate limit API route](https://api.github.com/rate_limit).

### Who made this?
[@jkulton](https://twitter.com/jkulton)

### Feedback
[hello@gistdoc.com](mailto:hello@gistdoc.com)

(This project is in no way affiliated with GitHub.)

## Development

Gistdoc is a React app build with [Next.js](https://nextjs.org/).

You can run Gistdoc locally:

```bash
npm i && npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.
