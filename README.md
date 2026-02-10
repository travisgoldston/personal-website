# Travis Goldston — Personal Website

A clean, minimal personal website built with HTML and CSS.

## Structure

- **index.html** — Home with hero and CTAs
- **about.html** — Story-driven About page
- **work.html** — Projects and case studies
- **writing.html** — Blog-style notes
- **photography.html** — Image gallery
- **contact.html** — Contact form

## Local Development

Open `index.html` in a browser, or run a simple server:

```bash
# Python 3
python -m http.server 8000

# Node (npx)
npx serve .
```

Then visit `http://localhost:8000`.

## Customization

- **Photography**: Replace the gradient placeholder divs in `photography.html` with `<img>` tags
- **Contact form**: Add a form handler (e.g., Formspree, Netlify Forms) by updating the form `action` and `method`
- **Writing**: Add real blog posts or link to an external blog
