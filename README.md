# Travis Goldston — Personal Website

An interactive handheld (“Pocketfolio”) homepage for [travisgoldston.com](https://travisgoldston.com).

## Structure

- **index.html** — Interactive Game Boy–style portfolio (home, about, work, toolkit, contact)
- **quest.html** — Side quest: run Travis to the goal line on the same handheld
- **assets/images/travis-sprite.png** — Pixel avatar used on Home, About, and the side quest
- **about.html**, **work.html**, **writing.html**, **photography.html**, **useful.html**, **contact.html** — Additional routes (currently coming soon)

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
