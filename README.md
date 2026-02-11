# neat.css

One line of code to make any raw HTML page beautiful. No classes. No JavaScript. No config.

```html
<link rel="stylesheet" href="https://unpkg.com/neat.css">
```

That's it.

## What it does

Write plain HTML. Get a good-looking page. `neat.css` styles every standard HTML element — headings, paragraphs, links, lists, tables, forms, code blocks, and more — using only element selectors. You never write a single class name.

- **~2 KB gzipped** — lighter than a favicon
- **Dark mode** — automatic, via `prefers-color-scheme`
- **Responsive** — works on every screen size
- **Print-ready** — clean output when printed
- **Zero dependencies** — just CSS

## Install

**CDN (recommended):**

```html
<link rel="stylesheet" href="https://unpkg.com/neat.css">
```

**npm:**

```
npm install neat.css
```

Then import the stylesheet in your project:

```html
<link rel="stylesheet" href="node_modules/neat.css/neat.min.css">
```

Or with a bundler:

```js
import "neat.css";
```

**Script tag (alternative):**

```html
<script src="https://unpkg.com/neat.css/index.js"></script>
```

## What gets styled

| Category | Elements |
|---|---|
| Typography | `h1`–`h6`, `p`, `strong`, `em`, `small`, `mark`, `abbr` |
| Links | `a` with clean underlines and hover states |
| Lists | `ul`, `ol`, `dl` with proper nesting |
| Blockquotes | Accent-bordered with subtle background |
| Code | Inline `code`, `pre` blocks, `kbd` keys |
| Tables | Full-width, bordered rows, hover highlights |
| Forms | `input`, `textarea`, `select`, `checkbox`, `radio`, `button` |
| Interactive | `details`/`summary`, `dialog` |
| Layout | `header`, `footer`, `nav`, `main`, `section`, `aside` |
| Media | `img`, `video`, `figure`/`figcaption` |
| Misc | `hr`, `progress`, `meter` |

## Customization

Override CSS custom properties on `:root` to tweak the theme:

```css
:root {
  --accent: #e63946;    /* primary color */
  --bg: #fefae0;        /* background */
  --text: #283618;      /* text color */
  --measure: 60ch;      /* content width */
  --radius: 8px;        /* border radius */
  --font-sans: "Georgia", serif;
}
```

All variables are listed at the top of `neat.css`.

## Browser support

All modern browsers (Chrome, Firefox, Safari, Edge). No IE support.

## License

MIT

## Links

- [GitHub](https://github.com/ayshptk/neat.css)
- [npm](https://www.npmjs.com/package/neat.css)
- [Demo](https://neat-css.vercel.app)
