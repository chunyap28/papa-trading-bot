# papa-trading-bot

Companion website for the [**Build Your First Trading Bot**](https://www.amazon.com/dp/B0HG4J3RG9) ebook.

A small React + React Router single-page app deployed to GitHub Pages. The
`/BuildYourFirstTradingBot` route is the setup page the book itself refers
readers to for OANDA (broker sandbox) and Kamatera (cloud VPS) setup,
including affiliate links.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs static site to dist/
npm run preview # serve the production build locally
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site
and publishes it via GitHub Pages. In the repo settings, set **Pages → Build
and deployment → Source** to **GitHub Actions**.

The site is served from the custom domain in `public/CNAME`
(`papatradingbot.com`). Point that domain's DNS at GitHub Pages
([docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site))
and enable **Enforce HTTPS** once the certificate is issued. If you'd rather
use the default `https://<username>.github.io/papa-trading-bot/` URL instead,
delete `public/CNAME` and set `base: "/papa-trading-bot/"` in
`vite.config.js`.

## Affiliate links

Real OANDA / Kamatera affiliate URLs go in `src/config/affiliateLinks.js` —
that's the only file that needs updating before going live. Placeholders are
checked in for now.
